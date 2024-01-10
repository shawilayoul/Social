import express from "express"
import { Users } from "../models/users.js"
import bcrypt, { genSalt } from 'bcrypt'
const router = express.Router()

/** Register route */
router.post("/register", async (req, res) => {
    try {
        const { username, email, password } = req.body;
        const salt = bcrypt.genSaltSync(10)
        const hashpassword = bcrypt.hashSync(password, salt)
        const newUser = await Users.create({ username: username, email: email, password: hashpassword })
        return res.status(201).json(newUser)
    } catch (error) {
        res.status(500).json(error.message)
    }
})

/* login route */
router.post("/login", async (req, res) => {
    try {
        const { password } = req.body
        const user = await Users.findOne({ email: req.body.email })
        if (!user) { return res.status(404).json({ message: "user not found" }) }
        const match = bcrypt.compareSync(password, user.password)
        if (!match) { return res.status(404).json({ message: "Invalid password" }) }
        return res.status(200).json(user)
    } catch (error) {
        res.status(500).json(error.message)
    }
})

export default router