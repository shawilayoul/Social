import React, { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux"
import "./navBar.scss"
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import MarkunreadOutlinedIcon from '@mui/icons-material/MarkunreadOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import NightlightOutlinedIcon from '@mui/icons-material/NightlightOutlined';
import { getUser } from '../../features/user/userSlice';
import { getPost } from '../../features/post/postSlice'
import profile from "../../assests/profile.jpeg"
import { Link } from 'react-router-dom';

const NavBar = () => {
    const dispatch = useDispatch()
    const { posts } = useSelector(state => state.post)
    const { user } = useSelector(state => state.auth)

    useEffect(() => {
        dispatch(getPost())
        dispatch(getUser(posts.userId))
    }, [dispatch, posts.userId])
    return (
        <div className='navBar'>
            <div className="navCard">
                <div className="left">
                    <span>Shawil Social</span>
                    <Link to="/">
                        <HomeOutlinedIcon />
                    </Link>

                    <NightlightOutlinedIcon />
                    <GridViewOutlinedIcon />
                    <div className="search">
                        <SearchOutlinedIcon className='searchIcon' />
                        < input type="text" placeholder='search' />
                    </div>

                </div>
                <div className="right">
                    <MarkunreadOutlinedIcon />
                    <NotificationsNoneOutlinedIcon />
                    <img src={user.profilePicture || profile} alt="" />
                    <Link to={`/profile/${user._id}`} className='link'>  <span>{user.username}</span>  </Link>
                </div>
            </div>
        </div>
    )
}

export default NavBar
