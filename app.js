import express from 'express'
import mongoose from 'mongoose';
import { postRouter } from './app/post/PostApi.js';
import { commentRouter } from './app/comment/CommentApi.js';
import { userRouter } from './app/user/UserApi.js';
import BodyParser from 'body-parser'
import { auth } from './app/middleware/auth.js';
export const app = express();


export const connection = async() => {
    console.log('base de donnée connectée')
    await mongoose.connect('mongodb+srv://imrane:imrane@cluster0.qp6or6l.mongodb.net/nodeblog');
}

app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: true }));

app.use('/posts', auth, postRouter)
app.use('/comments', auth, commentRouter)
app.use('/api', userRouter)


export const db = mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB connection error:"));

export default app