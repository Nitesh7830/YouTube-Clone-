import { createSlice } from "@reduxjs/toolkit";

const videooSlice = createSlice({
    name: "video",
    initialState: {
        landingPageVideos: null,
        nowPlayingVideoComments: null,

    },
    reducers: {
        addLandingPageVideos: (state, action) => {
            state.landingPageVideos = action.payload;
        },
        addNowPlayingVideoComments: (state, action) => {
            state.nowPlayingVideoComments = action.payload;
        },
    }
})

export const { addLandingPageVideos, addNowPlayingVideoComments } = videooSlice.actions;
export default videooSlice.reducer