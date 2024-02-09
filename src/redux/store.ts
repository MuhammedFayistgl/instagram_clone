import { configureStore } from "@reduxjs/toolkit";
import ThemeSlice from "./ThemeSlice";
import userSlice from "./userSlice";
import StorySlice from "./StorySlice";
import userDataSlice from "./userDataSlice";
import publicFeedsSlice from "./publicFeedsSlice";
import ChatSlice from "./ChatSlice";
// import socketSlice from "./socketSlice";

export const Store = configureStore({
    reducer: {
        theme: ThemeSlice,
        user: userSlice,
        story: StorySlice,
        userDataSlice,
        publicFeedsSlice,
        ChatSlice,
        // socketSlice
    },
});
