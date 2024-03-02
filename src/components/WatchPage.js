
import { useSearchParams } from 'react-router-dom';
import { useSelector } from 'react-redux'
import useVideosComments from '../hooks/useVideosComments';
import VideoComment from './VideoComment';

const WatchPage = () => {
    useVideosComments();
    const comments = useSelector((store) => store?.video?.nowPlayingVideoComments)
    console.log(comments)
    const [searchParam] = useSearchParams()
    return (
        <div className='p-5'>
            <div>
                <iframe
                    className='rounded-lg '
                    width="1000"
                    height="500"
                    src={"https://www.youtube.com/embed/" + searchParam.get("v")}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                ></iframe>
            </div>
            <div>
                {comments?.map((cmt) => <VideoComment key={cmt.id} video={cmt} />)}
            </div>
        </div >
    )
}

export default WatchPage