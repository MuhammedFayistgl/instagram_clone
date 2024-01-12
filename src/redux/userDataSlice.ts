import { user } from "./../types/ProfileType";
import { createSlice } from "@reduxjs/toolkit";
type userData = {
    _id: string;
    user: user;
    onFeeds: [];
};

const Details: userData = {
    _id: "",
    user: {
        USER_NAME: "",
        Followers: 0,
        Following: 0,
        description: "",
        uid: "",
        url: "",
    },
    onFeeds:[],
};

const userDataSlice = createSlice({
    name: "setUser-Data-Global",
    initialState: { Details },
    reducers: {
        setUserData: (state, action) => {
            state.Details = action.payload;
        },
        getUserFeeds: (state, action) => {
            state.Details.onFeeds = action.payload;
        },
    },
});

export const { setUserData, getUserFeeds } = userDataSlice.actions;

export default userDataSlice.reducer;
