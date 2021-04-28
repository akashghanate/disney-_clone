import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import userReducer from '../features/user/userSlice'

// Configure Redux Store
export default configureStore({
    reducer: {
        user: userReducer
    },
    middleware: getDefaultMiddleware({
        serializableCheck: false,
    })
})