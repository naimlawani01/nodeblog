import { getAll, save, updateComment, deleteComment } from "./CommentRepositoryModel.js"

export class Comment {
    text
    user_id

    constructor(text, user_id) {
        this.text = text
        this.user_id = user_id
    }
    addComment(comment, idPost) {
        return save(comment, idPost)
    }
    getComments(idPost) {
        return getAll(idPost)
    }
    getUserCommentsServices(idPost, userId) {
        return getUserComments(idPost, userId)
    }

    modifycomment(idComment, data) {
        return updateComment(idComment, data)
    }
    deleteCommentServices(idComment, idPost) {
        return deleteComment(idComment, idPost)
    }

}