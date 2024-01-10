import React from 'react'
import "./home.scss"
import RightBar from '../../components/rightbar/RightBar'
import { Stories } from '../../components/stories/Stories'
import Posts from '../../components/posts/Posts'

const Home = () => {
    return (
        <div className='home'>
            <div className="homeCard">
                <Stories />
                <Posts />
            </div>
            <div className="righbar">
                <RightBar />
            </div>
        </div>
    )
}

export default Home
