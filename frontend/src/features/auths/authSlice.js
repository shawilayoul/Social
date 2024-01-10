import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import authService from "./authservice"

const initialState = {
    user: '',
    isLoading: false,
    isSuccess: false,
    isError: false,
    message: ''
}
/****  login user ****/
export const login = createAsyncThunk('/auth/login', async (userData, thankAPI) => {
    try {
        return await authService.Login(userData)
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message)
            || error.message || error.toString()
        return thankAPI.rejectWithValue(message)
    }
})
/****  register user ****/
export const register = createAsyncThunk('/auth/register', async (userData, thankAPI) => {
    try {
        return await authService.register(userData)
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message)
            || error.message || error.toString()
        return thankAPI.rejectWithValue(message)
    }
})
export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        resets: () => initialState
    },
    extraReducers: (builder) => {
        builder
            .addCase(login.pending, (state) => {
                state.isLoading = true
            })
            .addCase(login.fulfilled, (state, action) => {
                state.isSuccess = true
                state.user = action.payload
            })
            .addCase(login.rejected, (state, action) => {
                state.isError = true
                state.message = action.payload
            })
            .addCase(register.pending, (state) => {
                state.isLoading = true
            })
            .addCase(register.fulfilled, (state, action) => {
                state.isSuccess = true
                state.user = action.payload
            })
            .addCase(register.rejected, (state, action) => {
                state.isError = true
                state.message = action.payload
            })
    }
})
export default authSlice.reducer
export const { resets } = authSlice.actions