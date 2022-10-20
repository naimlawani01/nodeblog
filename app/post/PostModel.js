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



}