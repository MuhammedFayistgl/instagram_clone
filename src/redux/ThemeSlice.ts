import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
    name: 'themeslice',
    initialState: { value: localStorage.getItem('theme') }
    ,
    reducers: {
        setTheme: (state) => {
            state.value = state.value === 'dark' ? 'light' : 'dark'
            localStorage.setItem('theme',state.value)
        }
    }

})

export const { setTheme } = themeSlice.actions

export default themeSlice.reducer