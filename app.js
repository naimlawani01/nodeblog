import express from 'express'
import mongoose from 'mongoose';
import { postRouter } from './app/post/PostApi.js';
import { commentRouter } from './app/comment/CommentApi.js';
import BodyParser from 'body-parser'
export const app = express();


export const connection = async() => {
    console.log('base de donnée connectée')
    await mongoose.connect('mongodb+srv://imrane:imrane@cluster0.qp6or6l.mongodb.net/nodeblog');
}

app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: true }));

app.use('/posts', postRouter)
app.use('/comments', commentRouter)


export const db = mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB connection error:"));

export default app