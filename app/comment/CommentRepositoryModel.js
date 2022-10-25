import mongoose from 'mongoose'
import { PostModel } from '../post/PostRepositoryModel.js';

// export const CommentSchema = new mongoose.Schema({
//     id: String,
//     text: String,
//     user_id: String,
// }, { timestamps: true })

// export const CommentModel = mongoose.model('Comment', CommentSchema);

export const getAll = async(idPost) => {
    return await PostModel.findById(idPost).select('comments')
}
export const save = async(comment, idPost) => {
    return await PostModel.updateOne({ _id: idPost }, {
        $push: {
            "comments": { text: comment.text, user_id: comment.user_id }
        }

    })
}
export const update = () => {}
export const getUserComments = async(idPost, userId) => {}