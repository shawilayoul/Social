import express from 'express';
import bodyParser from 'body-parser';
import helmet from 'helmet';
import morgan from 'morgan';
import Dotenv from 'dotenv';
import { connectdb } from './mongodb/db.js';
import mongoose from 'mongoose';
import usersRoutes from './routes/usersRoutes.js'
import auth from './routes/auth.js'
import postRoutes from './routes/posts.js'
import cors from "cors"

const app = express()

mongoose.set('strictQuery', true)

connectdb()
Dotenv.config()
/* Middlewares */
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(morgan('common'))
app.use(helmet())
app.use(cors())

/* routes */
app.use('/api/users', usersRoutes)
app.use('/api/auth', auth)
app.use('/api/posts', postRoutes)

const PORT = process.env.port || 5000
app.listen(PORT, () => console.log(`server running on the port ${PORT}`))