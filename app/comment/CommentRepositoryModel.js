import mongoose from 'mongoose'

export const CommentSchema = new mongoose.Schema({
    id: String,
    comment: String,
    user_id: String,
}, { timestamps: true })

export const CommentModel = mongoose.model('Comment', CommentSchema);

export const getall = () => {}
export const save = () => {}
export const update = () => {}
export const deletepost = () => {}