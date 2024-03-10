import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import videoSlice from "./videoSlice";
import searchSlice from "./searchSlice";
import chartSlice from "./chartSlice";

const store = configureStore({
    reducer: {
        app: appSlice,
        video: videoSlice,
        search: searchSlice,
        chat: chartSlice,
    }
});
export default store 