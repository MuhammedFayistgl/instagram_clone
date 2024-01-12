import { createSlice } from "@reduxjs/toolkit";

const state = { isOpen: false, value: [] };
const StorySlice = createSlice({
    name: "StorySlice",
    initialState: state,
    reducers: {
        setShowStory: (state, action) => {
            state.isOpen = !state.isOpen;
            state.value = action.payload && state.isOpen ?  action.payload : [];
        },
    },
});

export const { setShowStory } = StorySlice.actions;

export default StorySlice.reducer;
