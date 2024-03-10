import { createSlice } from "@reduxjs/toolkit";
import { LiveChat_count } from "./Constants";

const chartSlice = createSlice({
    name: 'chat',
    initialState: {
        messages: []
    },
    reducers: {
        addMessage: (state, action) => {
            //splice method remove the element fomr the message array
            state.messages.splice(LiveChat_count, 1)
            state.messages.push(action.payload);
        },
    },
});

export const { addMessage } = chartSlice.actions
export default chartSlice.reducer;