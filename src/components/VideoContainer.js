import React, { useEffect, useState } from 'react'
import { YouTube_API } from '../Utils/Constants';
import Videocard from './Videocard';
import { Link } from 'react-router-dom';

const VideoContainer = () => {
    const [videos, setvideos] = useState([])

    useEffect(() => {
        getVideos();
    }, []);
    const getVideos = async () => {
        const data = await fetch(YouTube_API)
        const json = await data.json()

        console.log(json)
        //setting data inside the videos it helps in reconsilation 
        setvideos(json?.items)

    }

    return (
        <div className='flex flex-wrap'>
            {videos.map(video => <Link to={"/watch?v=" + video.id} key={video.id}> < Videocard info={video} /></Link>)}
        </div>
    )
}

export default VideoContainer