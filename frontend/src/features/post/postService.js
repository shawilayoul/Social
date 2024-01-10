import axios from "axios"

const getPost = async (id) => {
    const response = await axios.get(`http://localhost:3001/api/posts/timeline/${id}`)
    return response.data
}

const postService = {
    getPost,
}

export default postService