import axios from "axios"
const getUser = async (id) => {
    const response = await axios.get(`http://localhost:3001/api/users/${id}/user`)
    return response.data
}

const userService = {
    getUser
}

export default userService