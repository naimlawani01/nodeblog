import { deletePost, findPostbyId, getAll, getAllUserPost, save, updatePost } from "./PostRepositoryModel.js"

export class Post {
    id
    title
    content
    user_id
    comments

    constructor(id, title, content, user_id, comments) {
        this.id = id
        this.title = title
        this.content = content
        this.user_id = user_id
        this.comments = comments
    }

    getAllPost() {
        return getAll()
    }
    addPost(post) {
        return save(post)
    }

    modifyPost(idPost, data) {
        return updatePost(idPost, data)
    }
    findPost(idPost) {
        return findPostbyId(idPost)
    }
    deletePostServices(id) {
        return deletePost(id)
    }
    getAllUserPostServices(userId) {
        return getAllUserPost(userId)
    }
}