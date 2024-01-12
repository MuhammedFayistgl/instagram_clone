import { createSlice } from "@reduxjs/toolkit";
import { FeedData } from "../types/FeedType";
type SliceDataType = {
    value: FeedData[] | null;
};
const state: SliceDataType = {
    value: null,
};
const publicFeedsSlice = createSlice({
    name: "all-public-feed-data-slice",
    initialState: state,
    reducers: {
        setAllPublicFeedData: (state, action) => {
            state.value = action.payload;
        },
    },
});

export const { setAllPublicFeedData } = publicFeedsSlice.actions;

export default publicFeedsSlice.reducer;
