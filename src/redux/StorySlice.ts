import { createSlice } from "@reduxjs/toolkit";

const state = false
const StorySlice = createSlice({
    name: "StorySlice",
    initialState: { value: state },
    reducers: {
        setShowStory: (state) => {
            state.value = !state.value;
        },
    },
});

export const { setShowStory } = StorySlice.actions;

export default StorySlice.reducer;
