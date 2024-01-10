
const AuthReducer = (state, action) => {
    switch (action.type) {
        case "LOGIN_START":
            return {
                user: null,
                isLoading: true,
                isError: false,
            }
        case "LOGIN_SUCCESS":
            return {
                isLoading: false,
                isError: false,
                user: action.payload
            }
        case "LOGIN_FAIL":
            return {
                isLoading: false,
                isError: true,
                user: null,
            }
        default:
            return state
    }
}

export default AuthReducer