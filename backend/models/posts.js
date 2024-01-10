import mongoose from "mongoose";

const postScema = new mongoose.Schema({
    userId: {
        type: String,
        required: true
    },
    desc: {
        type: String,
    },
    img: {
        type: String,
    },
    likes: {
        type: Array,
        default: []
    }
}, { timestamps: true })

export const Posts = mongoose.model("Posts", postScema)