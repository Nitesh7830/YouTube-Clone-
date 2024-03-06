
import { useSearchParams } from 'react-router-dom';
import { useSelector } from 'react-redux'
import useVideosComments from '../hooks/useVideosComments';
import VideoComment from './VideoComment';
import useLandingpageVideo from '../hooks/useLandingPageVideo';
import { useState } from 'react';

const WatchPage = () => {
    const [showComments, setshowComments] = useState(true)
    const fnshowComments = () => {
        console.log('before click', showComments)
        setshowComments(!showComments)
        console.log('after click', showComments)
    }

    useLandingpageVideo();
    const videos = useSelector((store) => store.video.landingPageVideos)
    useVideosComments();
    const comments = useSelector((store) => store?.video?.nowPlayingVideoComments)
    const [searchParam] = useSearchParams()
    videos && console.log(videos)
    const searchValue = searchParam.get("v");
    const { title: titles, channelTitle } = (videos && videos
        .filter((value) => value.id === searchValue)
        .map((filteredVideo) => filteredVideo.snippet))?.[0] || {};
    return (
        <div className='p-5 shadow-lg'>
            <div>
                <iframe
                    className='rounded-lg '
                    width="1000"
                    height="500"
                    src={"https://www.youtube.com/embed/" + searchValue}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                ></iframe>
            </div>
            <div className='p-2 m-2 text-lg font-serif font-bold'>
                <h1>{titles}</h1>
                <h5>{channelTitle}</h5>
            </div>
            {<hr />}
            <div className='border-2'>
                <div className='flex justify-between p-2 shadow-md bg-slate-300'>
                    <div className='font-bold font-sans'>Comments</div>
                    <div><button onClick={fnshowComments}>{showComments === false ? '⬇️' : '⬆️'}</button></div>
                </div>
                {showComments && comments?.map((cmt) => <VideoComment key={cmt.id} video={cmt} />)}
            </div>
        </div >
    )
}

export default WatchPage