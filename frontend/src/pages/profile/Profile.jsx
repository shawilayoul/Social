import profile from "../../assests/profile.jpeg"
import cover from "../../assests/procover.jpeg"
import { useSelector } from "react-redux"
import "./profile.scss"
import Posts from "../../components/posts/Posts"
import { BsFacebook, BsInstagram, BsTwitter, BsGithub, BsLinkedin, BsGlobe } from "react-icons/bs"
import { ImLocation } from "react-icons/im"
import ProfileInfo from "../../components/profileIno/ProfileIno"
import { MdOutlineEmail, MdModeEditOutline } from "react-icons/md"

const Profile = () => {
    const { user } = useSelector(state => state.auth)
    return (
        <div className='profContainer'>
            <div className="profilePictures">
                <div className='coverP'> <img src={user.coverPicture || cover} alt="" /></div >
                <div className="profilePhoto">   <img src={user.profilePicture || profile} alt="" />
                    <span>{user.username}</span>
                    <span>{user.desc}</span>
                </div>

            </div>
            <div className="profileCard">
                <div className="left">
                    <a href="https://www.facebook.com"><BsFacebook /></a>
                    <a href="https://www.instagram.com"><BsInstagram /></a>
                    <a href="https://www.twitter.com"><BsTwitter /></a>
                    <a href="https://www.linked.com"><BsLinkedin /></a>
                    <a href="https://www.github.com"><BsGithub /></a>
                </div>
                <div className="center">
                    <div className="link">
                        <a href="#location"><ImLocation /></a>
                        <a href="https://www.globe.com"><BsGlobe /></a>
                    </div>
                    <div className="btnFollo"><button>Follow</button></div>
                </div>
                <div className="right">
                    <a href="#email"><MdOutlineEmail /></a>
                    <a href="#edid"><MdModeEditOutline /></a>
                </div>
            </div>
            <div className="organise">
                <div className="post">
                    <Posts />
                </div>
                <div className="proInfo">
                    <ProfileInfo />
                </div>
            </div>
        </div >
    )
}

export default Profile
