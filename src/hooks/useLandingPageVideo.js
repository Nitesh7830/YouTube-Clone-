import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { YouTube_API } from "../Utils/Constants";
import { addLandingPageVideos } from "../Utils/videoSlice";

const useLandingpageVideo = () => {
    const dispatch = useDispatch()
    const getVideos = async () => {
        const data = await fetch(YouTube_API)
        const json = await data.json();
        dispatch(addLandingPageVideos(json?.items))

    }
    useEffect(() => {
        getVideos();
    }, []);
}
export default useLandingpageVideo;
