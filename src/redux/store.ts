import { configureStore } from "@reduxjs/toolkit";
import ThemeSlice from "./ThemeSlice";
import userSlice from "./userSlice";

export const Store = configureStore({
    reducer: {
        theme: ThemeSlice,
        user: userSlice,
    },
});
