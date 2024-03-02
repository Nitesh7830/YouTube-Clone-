import React from 'react'

const Button = ({ name }) => {
    return (
        <button type="submit" className="inline-flex items-center p-2  m-2 mr-1 text-sm  font-medium text-white bg-gray-700 rounded-lg border border-gray-700 transition-all duration-300 ease-in-out hover:bg-gray-800 focus:ring-2 focus:outline-none focus:ring-gray-300 transform hover:scale-105">
            {name}
        </button>
    )
}

export default Button