import React from 'react'
import Button from './Button'

const ButtonList = () => {
    const BtnList = ['All', 'Gaming', 'Computer Programming', 'Music', 'Stocks', 'Cooking']
    return (
        <div className='flex mt-1 mx-2'>
            {BtnList.map((name) => (
                <Button key={name} name={name} />
            ))}
        </div>
    )
}


export default ButtonList