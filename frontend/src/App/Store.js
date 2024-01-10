import { configureStore } from "@reduxjs/toolkit"
import postReducer from "../features/post/postSlice"
import userReducer from "../features/user/userSlice"
import authReducer from "../features/auths/authSlice"

const Store = configureStore({
    reducer: {
        post: postReducer,
        user: userReducer,
        auth: authReducer
    }
})

export default Store