import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { resets, getPost } from "../../features/post/postSlice"
import Post from './post/post';


const Posts = () => {
    const dispatch = useDispatch()
    const { posts } = useSelector(state => state.post)
    const { user } = useSelector(state => state.auth)
    useEffect(() => {
        dispatch(getPost(user._id))
        dispatch(resets())
    }, [dispatch, user._id])
    return (
        <div className='posts'>
            {posts.length > 0 ? (
                posts.map((post) => (
                    <div key={post._id}>
                        <Post post={post} />:<></> </div>))
            ) : (<><h2>You have no post to view</h2></>)

            }
        </div>
    )
}

export default Posts
