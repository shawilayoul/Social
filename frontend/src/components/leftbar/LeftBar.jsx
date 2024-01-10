import "./leftBar.scss"
import { Link } from "react-router-dom"
import profile from "../../assests/profile.jpeg"
import NewspaperOutlinedIcon from '@mui/icons-material/NewspaperOutlined';
import AutoStoriesOutlinedIcon from '@mui/icons-material/AutoStoriesOutlined';
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';
import VideocamOutlinedIcon from '@mui/icons-material/VideocamOutlined';
import CollectionsOutlinedIcon from '@mui/icons-material/CollectionsOutlined';
import SportsEsportsOutlinedIcon from '@mui/icons-material/SportsEsportsOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import RememberMeOutlinedIcon from '@mui/icons-material/RememberMeOutlined';
import WatchLaterOutlinedIcon from '@mui/icons-material/WatchLaterOutlined';
import Groups2OutlinedIcon from '@mui/icons-material/Groups2Outlined';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import { useSelector } from "react-redux"

const LeftBar = () => {

    const { user } = useSelector(state => state.auth)

    return (
        <div className='leftBar'>
            <div className="leftCard">
                <div className="items1">
                    <div className="personInfo">
                        <img src={user.profilePicture || profile} alt="" />
                        <Link to="/profile/id" className='link'><span>{user.username}</span></Link>
                    </div>
                    <div className="items">
                        <PeopleAltOutlinedIcon />
                        <span>Friends</span>
                    </div>
                    <div className="items">
                        < Groups2OutlinedIcon />
                        <span>Groups</span>
                    </div>
                    <div className="items">
                        < StorefrontOutlinedIcon />
                        <span>Market</span>
                    </div>
                    <div className="items">
                        < WatchLaterOutlinedIcon />
                        <span>Watch</span>
                    </div>
                    <div className="items bottom">
                        < RememberMeOutlinedIcon />
                        <span>Memories</span>
                    </div>
                    <hr />
                </div>
                <div className="items1">
                    <div className="items">
                        <span className='shortcuts'>Your shortcuts</span>
                    </div>
                    <div className="items">
                        <CalendarMonthOutlinedIcon />
                        <span>Events</span>
                    </div>
                    <div className="items">
                        < SportsEsportsOutlinedIcon />
                        <span>Gaming</span>
                    </div>
                    <div className="items">
                        < CollectionsOutlinedIcon />
                        <span>Gallery</span>
                    </div>
                    <div className="items">
                        < VideocamOutlinedIcon />
                        <span>Videos</span>
                    </div>
                    <div className="items bottom">
                        < MailOutlinedIcon />
                        <span>Messages</span>
                    </div>
                    <hr />
                </div>
                <div className="items1">
                    <div className="items">
                        <span className='shortcuts'>Others</span>
                    </div>
                    <div className="items">
                        <AutoStoriesOutlinedIcon />
                        <span>Stories</span>
                    </div>
                    <div className="items">
                        < NewspaperOutlinedIcon />
                        <span>News</span>
                    </div>
                    <div className="items">
                        < CollectionsOutlinedIcon />
                        <span>Courses</span>
                    </div>
                    <hr />
                </div>
            </div>
        </div>
    )
}

export default LeftBar
