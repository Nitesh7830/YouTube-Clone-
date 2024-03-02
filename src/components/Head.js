import React from 'react'
import { HamBurger_Btn, LOGO_URL, User_Icon } from '../Utils/Constants'
import { useDispatch } from 'react-redux'
import { toggleMenu } from '../Utils/appSlice'

const Head = () => {
    const dispatch = useDispatch()
    const toggeleMenuHandler = () => {
        dispatch(toggleMenu());
    };
    return (
        <div className='grid grid-flow-col p-2 shadow-lg '>
            {/*Left panner */}
            <div className='flex col-span-2 '>
                <img alt='hamburgerImg' className='w-15 h-12 ml-2 cursor-pointer' src={HamBurger_Btn} onClick={() => toggeleMenuHandler()} />
                <img alt='Youtube_log' className='w-15 h-12' src={LOGO_URL} />
            </div>

            {/*Center panner */}
            <div className="col-span-6 flex">
                <div className="relative w-2/4">
                    <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                        <svg className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path>
                        </svg>
                    </div>
                    <input type="text" id="voice-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5" placeholder="Search" required />
                    <button type="button" className="flex absolute inset-y-0 right-0 items-center pr-3">
                        <svg className="w-4 h-4 text-gray-500 hover:text-gray-900" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z" clipRule="evenodd"></path>
                        </svg>
                    </button>
                </div>
                <div>
                    <button type="submit" className="inline-flex items-center py-2.5 px-3 ml-2 text-xs font-medium text-white bg-gray-700 rounded-lg border border-gray-700 transition-all duration-300 ease-in-out hover:bg-gray-800 focus:ring-2 focus:outline-none focus:ring-gray-300 transform hover:scale-105">
                        Search
                    </button>

                </div>


            </div>



            {/*Right panner */}
            <div className='w-12 h-12 col-span-1'>
                <img alt='user_img' src={User_Icon} />
            </div>
        </div>
    )
}

export default Head