import "./comments.scss"
const Comments = () => {
    //Temporary
    const comments = [
        {
            id: 1,
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nequeaspernatur ullam aperiam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nequeaspernatur ullam aperiam",
            name: "John Doe",
            userId: 1,
            profilePicture:
                "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        },
        {
            id: 2,
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nequeaspernatur ullam aperiam",
            name: "Jane Doe",
            userId: 2,
            profilePicture:
                "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1600",
        },
    ];
    return (
        <div className="container">
            {comments.map(item => (
                <div className="comment" key={item.id}>
                    <div className="person">
                        <img src={item.profilePicture} alt="" />
                        <span>{item.name}</span>
                    </div>
                    <input type="text" placeholder=" Write a comment" />
                    <button>Add a comment</button>
                    <div className="disc"> <p>{item.desc}</p></div>

                </div>))}
        </div>
    )
}

export default Comments