import mongoose from 'mongoose'

export const PostSchema = new mongoose.Schema({
    id: String,
    title: String,
    content: String,
    user_id: String,
    comments: [{
        text: String,
        user_id: String
    }, { timestamps: true }],
}, { timestamps: true })


export const PostModel = mongoose.model('Post', PostSchema);

export const getAll = async() => {
    return await PostModel.find()
}
export const save = (post) => {
        let post_object = new PostModel({
            id: post.id,
            title: post.title,
            content: post.content,
            user_id: post.user_id,
            comments: post.comments

        })

        post_object.save((err) => {
            if (err) throw 'Save recountered a problem'
        })
    }
    // Modifier un post
export const updatePost = async(idPost, data) => {
    return await PostModel.updateOne({ _id: (idPost) }, { title: data.title, content: data.content })

}


// Supprimer un post
export const deletePost = async(id) => {
    return await PostModel.deleteOne({ _id: id })
}

// Rechercher un post
export const findPostbyId = async($idPost) => {
    return await PostModel.findById($idPost)
}



export const getAllUserPost = async(userId) => {
    return await PostModel.find({ user_id: userId })
}