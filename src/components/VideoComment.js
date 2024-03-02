import React from 'react'
import Loader from './Loader'
const VideoComment = ({ video }) => {
    if (!video || !video.snippet || !video.snippet.topLevelComment) {
        return <Loader />;
    }
    return (
        <div>
            <div className='p-5 w-[1000px]'>
                <div className='flex'>
                    <img className='rounded-full' alt='img_URL' src={video?.snippet?.topLevelComment?.snippet?.authorProfileImageUrl} />
                    <h5 className='font-mono font-bold mt-4 ml-5'>{video?.snippet?.topLevelComment?.snippet?.authorDisplayName}</h5>
                </div>
                <h6 className='px-16 mb-3'>{video?.snippet?.topLevelComment?.snippet?.textDisplay}</h6>
            </div>
        </div>

    )
}

export default VideoComment 