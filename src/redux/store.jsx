import { configureStore } from "@reduxjs/toolkit";
import { NFTpostReducer } from "./sliceRedux/SlicePosts";
import { ProfileReducer } from "./sliceRedux/SliceProfile";

export const store = configureStore({
    reducer: {
        Market: NFTpostReducer,
        Profiles: ProfileReducer
    }
})