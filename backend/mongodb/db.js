import mongoose from "mongoose";

export const connectdb = () => {
    mongoose.connect('mongodb://127.0.0.1/social')
        .then(() => console.log('mongodb connected successfully'))
        .catch((err) => console.log(`Failed to connect ${err}`))
}