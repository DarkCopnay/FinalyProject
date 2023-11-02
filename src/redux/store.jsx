import { configureStore } from "@reduxjs/toolkit";
import { NFTpostReducer } from "./sliceRedux/SlicePosts";
import { AuthReducer } from "./sliceRedux/SliceAuth";

export const store = configureStore({
    reducer: {
        Market: NFTpostReducer,
        Auth: AuthReducer
    }
})