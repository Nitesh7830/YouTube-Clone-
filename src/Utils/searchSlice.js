import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name: "Search",
    initialState: {},    //initial state is taken object because if we took array instead of object it will take much time to find 
    reducers: {
        cachesResults: (state, action) => {
            state = Object.assign(state, action.payload)     //Object.assign :- assign the value in the souce object from the targted 
        },
    },
});

export const { cachesResults } = searchSlice.actions;
export default searchSlice.reducer;