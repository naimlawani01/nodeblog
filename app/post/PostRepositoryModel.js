import mongoose from 'mongoose'
import { CommentSchema } from '../comment/CommentRepositoryModel.js'

export const PostSchema = new mongoose.Schema({
    id: String,
    title: String,
    content: String,
    user_id: String,
    comments: [CommentSchema],
}, { timestamps: true })


export const PostModel = mongoose.model('Post', PostSchema);

export const getAll = async() => {
    return await PostModel.find()
}
export const save = () => {}
export const update = () => {}
export const deletepost = () => {}