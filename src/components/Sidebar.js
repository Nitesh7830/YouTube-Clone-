import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    //suscribing  to store 
    const isMenuOpen = useSelector((store) => store.app.isMenueOpen)

    if (!isMenuOpen) return null;
    return (
        <div className='p-2   shadow-lg'>
            <ul className='cursor-pointer p-2 w-32'>
                <Link to={"/"}> <li className='p-2 hover:bg-slate-200 rounded-lg'>Home</li></Link>
                <li className='p-2 hover:bg-slate-200 rounded-lg'>Shorts</li>
                <li className='p-2 hover:bg-slate-200 rounded-lg'>Suscription</li>
            </ul>
            <hr className='font-bold' />
            <h1 className='font-bold mt-1 p-1 cursor-pointer'>You</h1>
            <ul className='cursor-pointer p-2 w-32'>
                <li className='p-2 hover:bg-slate-200 rounded-lg'>Music</li>
                <li className='p-2 hover:bg-slate-200 rounded-lg'>Sports</li>
                <li className='p-2 hover:bg-slate-200 rounded-lg'>Gaming</li>
                <li className='p-2 hover:bg-slate-200 rounded-lg'>Movies</li>
            </ul>

        </div >
    )
}

export default Sidebar