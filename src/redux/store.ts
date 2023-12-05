import { configureStore } from "@reduxjs/toolkit";
import ThemeSlice from "./ThemeSlice";
import userSlice from "./userSlice";
import StorySlice from "./StorySlice";

export const Store = configureStore({
    reducer: {
        theme: ThemeSlice,
        user: userSlice,
        story:StorySlice,
    },
});
