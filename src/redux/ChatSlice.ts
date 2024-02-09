import { createSlice } from "@reduxjs/toolkit";

const ChatSlice = createSlice({
    name: "ChatSlice",
    initialState: { value :[]},
    reducers: {
        setChatUserData: (state, action) => {
            state.value = action.payload;
        },
    },
});

export const { setChatUserData } = ChatSlice.actions;

export default ChatSlice.reducer;
