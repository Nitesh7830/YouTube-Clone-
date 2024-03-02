import React from 'react'
const Videocard = ({ info }) => {
    return (

        <div className='shadow-lg w-[325px] cursor-pointer m-2 rounded-lg'>
            <div className=" bg-white rounded-lg">
                <img className='rounded-lg hover:rounded-none' src={info?.snippet?.thumbnails?.maxres?.url} />
            </div>
            <ul className='p-1'>
                <li className='p-2 font-bold'>{info?.snippet?.title} </li>
                <li className='px-1 font-semibold'>{info?.snippet?.channelTitle} </li>
                <li className='px-1'>{info?.statistics?.viewCount} Views </li>
            </ul>
        </div>

    )
}

export default Videocard