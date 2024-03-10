import React from 'react'

const ChatMessage = ({ name, message }) => {
    return (
        <div className='flex items-center shadow-sm p-2'>
            <img
                className="h-8"
                alt="user"
                src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
            />
            <div className='flex align-middle p-1'>
                <span className='font-mono font-bold mt-3 ml-1'>{name}</span>
                <span className='ml-4 mt-1'>{message}</span>
            </div>
        </div>
    )
}

export default ChatMessage