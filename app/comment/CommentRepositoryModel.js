import mongoose from 'mongoose'
import { PostModel } from '../post/PostRepositoryModel.js';
import {UserSchema} from '../user/UserRepositoryModel.js';

export const CommentSchema = new mongoose.Schema({
    id: String,
    text: String,
    user_id: UserSchema,
}, { timestamps: true })

export const CommentModel = mongoose.model('Comment', CommentSchema);

export const getAll = async(idPost) => {
    return await  PostModel.findById(idPost).select('comments')
}
export const save = (comment, idPost) => {
    comment = CommentModel({
        id: comment.id,
        text: comment.text,
        user_id: comment.user_id
    })
}
export const update = () => {}
export const deletepost = () => {}
