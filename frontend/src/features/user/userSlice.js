import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import userService from "./userService"

const initialState = {
    isLoading: false,
    isError: false,
    isSuccess: false,
    message: '',
    users: ''
}
/*** get user ***/
export const getUser = createAsyncThunk('/user/get', async (id, thankAPI) => {
    try {
        return await userService.getUser(id)
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message)
            || error.message || error.toString()
        return thankAPI.rejectWithValue(message)
    }
})
export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        resets: (state) => initialState
    },
    extraReducers: (builder) => {
        builder
            .addCase(getUser.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getUser.fulfilled, (state, action) => {
                state.isSuccess = true
                state.users = action.payload
            })
            .addCase(getUser.rejected, (state, action) => {
                state.isError = true
                state.message = action.payload
            })
    }
})

export default userSlice.reducer
export const { resets } = userSlice.actions