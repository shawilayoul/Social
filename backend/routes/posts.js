import express from "express";
import { Posts } from "../models/posts.js"
import { Users } from "../models/users.js"

const router = express.Router()

/* create a post */
router.post('/', async (req, res) => {
    try {
        const { desc, likes, userId } = req.body
        const newPost = new Posts({
            desc,
            likes,
            userId
        })
        const post = await newPost.save()
        return res.status(201).json(post)

    } catch (error) {
        return res.status(500).json(error.message)
    }

})

/* update a post */
router.put('/:id', async (req, res) => {

    const post = await Posts.findById(req.params.id)
    if (post.userId === req.body.userId) {
        try {
            await Posts.findByIdAndUpdate(req.params.id, { $set: req.body })
            return res.status(200).json("post updated successfully")
        } catch (error) {
            return res.status(500).json(error.message)
        }

    } else {
        return res.status(403).json("you can only update your post")
    }

})

/* delete a post*/
router.delete("/:id", async (req, res) => {
    const post = await Posts.findById(req.params.id)
    if (post.userId === req.body.userId) {
        try {
            await Posts.findByIdAndRemove(req.params.id)
            return res.status(200).json("post deleted successfully")
        } catch (error) {
            return res.status(500).json(error)
        }
    } else {
        return res.status(403).json("you can only delete your posts")
    }
})

/* get post */
router.get('/:id/singlePost', async (req, res) => {
    try {
        const post = await Posts.findById(req.params.id)
        return res.status(200).json(post)
    } catch (error) {
        return res.status(500).json(error.message)
    }
})

/*likes */

router.put("/:id/like", async (req, res) => {
    try {
        const post = await Posts.findById(req.params.id)
        if (!post.likes.includes(req.body.userId)) {
            await post.updateOne({ $push: { likes: req.body.userId } })
            res.status(200).json({ message: "you like this post" })
        } else {
            await post.updateOne({ $pull: { likes: req.body.userId } })
            res.status(200).json({ message: "you dislike this post" })
        }
    } catch (error) {
        return res.status(500).json(error.message)
    }
})

/* get all  post of user and the followers */
router.get("/timeline/:userId", async (req, res) => {
    try {
        const CurrentUser = await Users.findById(req.params.userId)
        const UserPosts = await Posts.find({ userId: CurrentUser._id });
        const friendPosts = await Promise.all(
            CurrentUser.followings.map((friendId) => {
                return Posts.find({ userId: friendId });
            })
        );
        return res.status(200).json(UserPosts.concat(...friendPosts))
    } catch (error) {
        return res.status(500).json(error.message)
    }
})
/* get user post only */
router.get("/profile/:userId", async (req, res) => {
    try {
        const CurrentUser = await Users.findById(req.params.userId)
        const UserPosts = await Posts.find({ userId: CurrentUser._id });
        return res.status(200).json(UserPosts)
    } catch (error) {
        return res.status(500).json(error.message)
    }
})
export default router