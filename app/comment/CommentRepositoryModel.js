import mongoose from 'mongoose'
import { PostModel } from '../post/PostRepositoryModel.js';

// export const CommentSchema = new mongoose.Schema({
//     id: String,
//     text: String,
//     user_id: String,
// }, { timestamps: true })

// export const CommentModel = mongoose.model('Comment', CommentSchema);

export const getAll = async(idPost) => {
    return await PostModel.findById(idPost)
}
export const save = async(comment, idPost) => {
    return await PostModel.updateOne({ _id: idPost }, {
        $push: {
            "comments": { text: comment.text, user_id: comment.user_id }
        }

    })
}

// Modifier un commentaire
export const updateComment = async(idComment, data) => {


    return await PostModel.updateOne({ 'comments._id': idComment }, { '$set': { 'comments.$.text': data.text } })



}

// Supprimer un post
export const deleteComment = async(idCommennt, idPost) => {
    // get tableau commentaire
    let posts = await PostModel.findById(idPost)

    var i = posts.comments.filter((val) => {
            con
            console.log(`new ObjectId("${idCommennt}")`)
            val._id.toString() != idCommennt
            console.log(val._id.toString())
        })
        // posts.comments.slice(i, 1)
    console.log(i)

    return 'Ok'
}
export const getUserComments = async(idPost, userId) => {}