import { createSlice } from "@reduxjs/toolkit";
const state = localStorage.getItem('theme')
const themeSlice = createSlice({
    name: 'themeslice',
    initialState: { value: state ? true : false }
    ,
    reducers: {
        setTheme: (state) => {
            state.value = state.value = !state.value
            localStorage.setItem('theme',state.value === true ? "true" : "false")
        }
    }

})

export const { setTheme } = themeSlice.actions

export default themeSlice.reducer