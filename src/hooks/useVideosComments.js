import { useDispatch } from "react-redux"
import { YouTube_Video_comment_Api } from "../Utils/Constants"
import { useEffect } from "react"
import { closeMenu } from "../Utils/appSlice"
import { addNowPlayingVideoComments } from "../Utils/videoSlice"
import { useSearchParams } from "react-router-dom"

const useVideosComments = () => {
    const dispatch = useDispatch();
    const [searchParam] = useSearchParams()
    const getVideosComments = async () => {
        const data = await fetch(YouTube_Video_comment_Api + searchParam.get("v"))
        const json = await data.json()
        dispatch(addNowPlayingVideoComments(json?.items))
    }
    useEffect(() => {
        dispatch(closeMenu())
        getVideosComments()
    }, [])
}
export default useVideosComments