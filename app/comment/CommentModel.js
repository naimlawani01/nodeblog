import { getAll } from "./CommentRepositoryModel"

export class Comment{
    id
    comment
    user_id

    constructor(id, title, comment, user_id) {
        this.id = id
        this.comment = title
        this.user_id = user_id
    }
    addComment(idPost){
        return 
    }
    getComments(idPost){
        return getAll(idPost)
    }

}