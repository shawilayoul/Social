import "./storie.scss"
export const Stories = () => {
    const stories = [
        {
            id: 1,
            name: "John Doe",
            img: "https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
        },
        {
            id: 2,
            name: "John Doe",
            img: "https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
        },
        {
            id: 3,
            name: "John",
            img: "https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
        },
        {
            id: 4,
            name: "shawil",
            img: "https://thumbs.dreamstime.com/b/portrait-beautiful-afro-american-woman-street-119486754.jpg",
        },
    ];


    return (
        <div className="story">
            {stories.map((story) => (
                <div className="storyCart" key={story.id}>
                    <img src={story.img} alt="" />
                    <span>{story.name}</span>

                </div>
            ))

            }
        </div>
    )
}