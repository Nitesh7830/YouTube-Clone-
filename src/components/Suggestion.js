import React from 'react'

const Suggestion = ({ suggestion }) => {
    return (
        <div className='absolute w-[590px]  mt-1 shadow-md z-10 rounded-lg bg-slate-100' >
            <ul>
                {suggestion.map((s) => (
                    <li key={s} className='flex hover:bg-slate-300 rounded-sm cursor-default p-2 border-gray-100'>
                        <svg className="w-5 h-5 mt-1 ml-1 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path>
                        </svg><span className='ml-3'>{s}</span>
                    </li>
                ))}
            </ul>
        </div >
    )
}

export default Suggestion