import { configureStore } from "@reduxjs/toolkit";
import ThemeSlice from "./ThemeSlice";


export const Store = configureStore({
    reducer: {
        theme: ThemeSlice
    }
})
