import mongoose from 'mongoose'
import { CommentSchema } from '../comment/CommentRepositoryModel'

export const PostSchema = new mongoose.Schema({
    id: String,
    title: String,
    content: String,
    user_id: String,
    comments: [CommentSchema],
}, { timestamps: true })


export const PostModel = mongoose.model('Post', PostSchema);

export const getall = () => {}
export const save = () => {}
export const update = () => {}
export const deletepost = () => {}