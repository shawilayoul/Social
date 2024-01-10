import mongoose from 'mongoose';
const usersSchema = new mongoose.Schema({
    username: {
        type: String,
        requried: true,
        max: 20,
        unique: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    followers: {
        type: Array,
        default: []
    },
    followings: {
        type: Array,
        default: []
    },
    profilePicture: {
        type: String,
        default: ""
    },
    coverPicture: {
        type: String,
        default: ""
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    desc: {
        type: String,
    },
    city: {
        type: String
    },
    from: {
        type: String
    },
    relationship: {
        type: Number,
        enum: [1, 2, 3]
    }

}, { timestamps: true })


export const Users = mongoose.model('Users', usersSchema)