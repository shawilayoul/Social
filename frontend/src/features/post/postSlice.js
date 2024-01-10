import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import postService from "./postService"

const initialState = {
    isLoading: false,
    isError: false,
    isSuccess: false,
    message: '',
    posts: ''
}

/*** get post ***/
export const getPost = createAsyncThunk('/post/get', async (id, thankAPI) => {
    try {
        return await postService.getPost(id)
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message)
            || error.message || error.toString()
        return thankAPI.regjectWithValue(message)
    }
})

const postSlice = createSlice({
    name: 'post',
    initialState,
    reducers: {
        resets: (state) => initialState
    },
    extraReducers: (builder) => {
        builder
            .addCase(getPost.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getPost.fulfilled, (state, action) => {
                state.isSuccess = true
                state.posts = action.payload
            })
            .addCase(getPost.rejected, (state, action) => {
                state.isError = true
                state.message = action.payload
            })
    }
})

export const { resets } = postSlice.actions
export default postSlice.reducer