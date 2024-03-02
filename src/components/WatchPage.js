import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../Utils/appSlice';
import { useSearchParams } from 'react-router-dom';

const WatchPage = () => {
    const [searchParam] = useSearchParams()
    console.log(searchParam)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(closeMenu())
    }, [])
    return (
        <div>WatchPage</div>
    )
}

export default WatchPage