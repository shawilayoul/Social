
export const LoginStart = (userdata) => {
    type: "LOGIN_START"
}
export const LoginSuccess = (userdata) => {
    type: "LOGIN_SUCCESS"
    palyload: userdata
}
export const LoginFail = (error) => {
    type: 'LOGIN_FAIL'
    palyload: error
}