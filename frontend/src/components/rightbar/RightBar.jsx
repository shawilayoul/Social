import React from 'react'
import "./rightBar.scss"

const RightBar = () => {
    return (
        <div className='rightBar'>
            <div className="rightCard">
                <div className="head">
                    <span>Suggestions for you</span>
                </div>

                <div className="items">
                    <div className="left">
                        <img src="https://thumbs.dreamstime.com/b/portrait-beautiful-afro-american-woman-street-119486754.jpg" alt="" />
                        <span>Mariam</span>
                    </div>
                    <div className="right">
                        <button className='btnfollow'>Follow</button>
                        <button className='btndismiss'>dismis</button>
                    </div>

                </div>
                <div className="items">
                    <div className="left">
                        <img src="https://thumbs.dreamstime.com/b/portrait-beautiful-afro-american-woman-street-119486754.jpg" alt="" />
                        <span>Mariam</span>
                    </div>
                    <div className="right">
                        <button className='btnfollow'>Follow</button>
                        <button className='btndismiss'>dismis</button>
                    </div>

                </div>
            </div>
            <div className="rightCard">
                <div className="head">
                    <hr />
                    <span>Latest Activities</span>
                </div>

                <div className="items">
                    <div className="left">
                        <img src="https://thumbs.dreamstime.com/b/portrait-beautiful-afro-american-woman-street-119486754.jpg" alt="" />
                        <span>Mariam</span>
                        <span>changed a picture</span>
                    </div>

                    <div className="right">
                        <span>1 min ago</span>
                    </div>
                </div>
                <div className="items">
                    <div className="left">
                        <img src="https://thumbs.dreamstime.com/b/portrait-beautiful-afro-american-woman-street-119486754.jpg" alt="" />
                        <span>Khalid</span>
                        <span>liked a post</span>
                    </div>
                    <div className="right">
                        <span>3 min ago</span>
                    </div>

                </div>
                <div className="items">
                    <div className="left">
                        <img src="https://thumbs.dreamstime.com/b/portrait-beautiful-afro-american-woman-street-119486754.jpg" alt="" />
                        <span>Ajak</span>
                        <span>liked a comment </span>
                    </div>
                    <div className="right">
                        <span>5 hourse ago</span>
                    </div>

                </div>
                <div className="items">
                    <div className="left">
                        <img src="https://thumbs.dreamstime.com/b/portrait-beautiful-afro-american-woman-street-119486754.jpg" alt="" />
                        <span>shawil</span>
                        <span>posted</span>
                    </div>
                    <div className="right">
                        <span>5 weeks ago</span>
                    </div>
                </div>
            </div>
            <div className="rightCard">
                <div className="head">
                    <hr />
                    <span>Online friends</span>
                </div>

                <div className="items">
                    <div className="left">
                        <img src="https://thumbs.dreamstime.com/b/portrait-beautiful-afro-american-woman-street-119486754.jpg" alt="" />
                        <span>Mariam</span>
                    </div>


                </div>
                <div className="items">
                    <div className="left">
                        <img src="https://thumbs.dreamstime.com/b/portrait-beautiful-afro-american-woman-street-119486754.jpg" alt="" />
                        <span>Mariam</span>
                    </div>


                </div>
                <div className="items">
                    <div className="left">
                        <img src="https://thumbs.dreamstime.com/b/portrait-beautiful-afro-american-woman-street-119486754.jpg" alt="" />
                        <span>Mariam</span>
                    </div>


                </div>
                <div className="items">
                    <div className="left">
                        <img src="https://thumbs.dreamstime.com/b/portrait-beautiful-afro-american-woman-street-119486754.jpg" alt="" />
                        <span>Mariam</span>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default RightBar
