import React, { useState, useEffect } from 'react'
import ThumbUpOffAltOutlinedIcon from '@mui/icons-material/ThumbUpOffAltOutlined';
import SmsOutlinedIcon from '@mui/icons-material/SmsOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import profile from "../../../assests/profile.jpeg"
import cover from "../../../assests/cover.jpg"
import { format } from 'timeago.js';
import { Link } from "react-router-dom"
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import Comments from "../../comments/Comments"
import { useSelector, useDispatch } from "react-redux"
import { getUser, resets } from "../../../features/user/userSlice"
import "./post.scss"

const Post = ({ post }) => {
    const [likes, sesLikes] = (post.likes)
    const [openComment, setOpenComment] = useState(false)
    const dispatch = useDispatch()
    const { user } = useSelector(state => state.auth)
    useEffect(() => {
        dispatch((getUser(user._id)))
        dispatch(resets())
    }, [dispatch, user._id])
    return (
        <div className='post'>
            <div className="userInfo">
                <div className="left">
                    <Link to={`/profile/${user._id}`}>
                        <img src={user.profilePicture || profile} alt="" />
                    </Link>
                    <span>{user.username}</span>
                    <span>{format(post.createdAt)}</span>
                </div>
                <div className="right">
                    <ModeEditOutlineOutlinedIcon />
                </div>
            </div>
            <p>{post.desc}</p>
            <img src={post.img || cover} alt="" />
            <div className="comments">
                <div className="like"><ThumbUpOffAltOutlinedIcon /> <span>Likes</span></div>
                <div className="comment" onClick={() => { setOpenComment(!openComment) }}><SmsOutlinedIcon /><span>Comments</span></div>
                <div className="share"><ShareOutlinedIcon /><span>Share</span></div>
            </div>
            <div className='commmentControle'> {openComment && <Comments />}</div>
        </div>
    )
}

export default Post
