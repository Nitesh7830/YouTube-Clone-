import React from 'react'

const Sidebar = () => {
    return (
        <div className='p-5 w-48 '>
            <ul className='p-3'>
                <li>Home</li>
                <li>Shorts</li>
                <li>Suscription</li>
            </ul>
            <hr className='font-bold' />
            <h1 className='font-bold mt-2 p-2'>You</h1>
            <ul className='p-3'>
                <li>Music</li>
                <li>Sports</li>
                <li>Gaming</li>
                <li>Movies</li>
            </ul>

        </div >
    )
}

export default Sidebar