import express from "express";
import { Users } from "../models/users.js"
import bcrypt from "bcrypt"

const router = express.Router()
/* update a user */
router.put("/:id", async (req, res) => {
    if (req.body.userId === req.params.id || req.body.isAdmin) {
        if (req.body.password) {
            try {
                const salt = bcrypt.genSaltSync(10)
                req.body.password = bcrypt.hashSync(req.body.password, salt)
            } catch (error) {
                return res.status(500).json(error)
            }

        }
        try {
            const user = await Users.findByIdAndUpdate(req.params.id, { $set: req.body })
            res.status(200).json("account has been updated")
        } catch (error) {
            return res.status(500).json(error.message)
        }
    } else {
        return res.status(403).json({ message: "you can only update your account" })
    }
})

/* delete a user */
router.delete("/delete/:id", async (req, res) => {
    if (req.body.userId === req.params.id || req.body.isAdmin) {
        try {
            await Users.findByIdAndRemove(req.params.id)
            return res.status(200).json("user deleted successfully")
        } catch (error) {
            res.status(500).json(error)
        }
        res
    } else {
        return res.status(403).json("you can only delete your account")
    }
})
/* get a single user*/
router.get("/:id/user", async (req, res) => {
    try {
        const user = await Users.findById(req.params.id)
        return res.status(200).json(user)
    } catch (error) {
        return res.status(500).json(error.message)
    }
})
/* follow user*/
router.put("/:id/follow", async (req, res) => {
    if (req.body.userId !== req.params.id) {
        try {
            const user = await Users.findById(req.params.id)
            const currentUser = await Users.findById(req.body.userId)
            if (!user.followers.includes(req.body.userId)) {
                await user.updateOne({ $push: { followers: (req.body.userId) } })
                await currentUser.updateOne({ $push: { followings: (req.params.id) } })
                return res.status(200).json("youl followed this user")
            } else {
                return res.status(403).json("you are already following this user")
            }
        } catch (error) {
            return res.status(500).json(error.message)
        }
    } else {
        return res.status(403).json("you can't follow yours self")
    }
})

/* unfollow user */

router.put('/:id/unfollow', async (req, res) => {
    if (req.body.userId !== req.params.id) {
        try {
            const user = await Users.findById(req.params.id)
            const currentUser = await Users.findById(req.body.userId)
            if (user.followers.includes(req.body.userId)) {
                await user.updateOne({ $pull: { followers: (req.body.userId) } })
                await currentUser.updateOne({ $pull: { followings: (req.params.id) } })
                return res.status(200).json("you unfollowed this user")
            } else {
                return res.status(404).json("you don't follow this user")
            }
        } catch (error) {
            return res.status(500).json(error.message)
        }
    } else {
        return res.status(403).json("you can't follow yourself")
    }
})
export default router