import React from 'react'
import Loader from './Loader'


const VideoComment = ({ video }) => {

    // console.log(`Landing page data:-`, landingPage)
    if (!video || !video.snippet || !video.snippet.topLevelComment) {
        return <Loader />;
    }
    return (
        <div className='p-5 w-[1000px] shadow-sm'>
            <div className='flex'>
                <img className='rounded-full h-11' alt='img_URL' src={video?.snippet?.topLevelComment?.snippet?.authorProfileImageUrl} />
                <div>
                    <h5 className='font-mono font-bold mt-1 ml-4'>{video?.snippet?.topLevelComment?.snippet?.authorDisplayName}</h5>
                    <h6 className='ml-4 mb-2'>{video?.snippet?.topLevelComment?.snippet?.textDisplay}</h6>
                </div>
            </div>
        </div>

    )
}

export default VideoComment 