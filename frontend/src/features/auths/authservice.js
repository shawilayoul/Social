import axios from "axios"

const Login = async (userData) => {
    const res = await axios.post("http://localhost:3001/api/auth/login", userData)
    return res.data
}
const register = async (userData) => {
    const res = await axios.post("http://localhost:3001/api/auth/register", userData)
    return res.data
}
const authService = {
    Login,
    register
}
export default authService