
import Videocard from './Videocard';
import { Link } from 'react-router-dom';
import useLandingpageVideo from '../hooks/useLandingPageVideo';
import { useSelector } from 'react-redux';
import useVideosComments from '../hooks/useVideosComments';

const VideoContainer = () => {
    useLandingpageVideo()
    const videos = useSelector((store) => store.video.landingPageVideos)
    return (
        <div className='flex flex-wrap'>
            {videos?.map(video => <Link to={"/watch?v=" + video.id} key={video.id}> < Videocard info={video} /></Link>)}
        </div>
    )
}

export default VideoContainer