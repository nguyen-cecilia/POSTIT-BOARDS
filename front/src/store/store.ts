import {configureStore} from '@reduxjs/toolkit';
import AppSlice from "./AppSlice.ts";

const store = configureStore({
    reducer: {
        app: AppSlice,
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;

export default store;