import express from 'express';
import { Comment } from './CommentModel.js';
const commentRouter = express.Router()

//Recuperer tous les Commentaiere d'un post
commentRouter.get('/:idPost', async(req, res) => {
    try {
        res.status(200)
        const comments = new Comment()
        let idPost = req.params.idPost
        res.send(await comments.getComments(idPost))
    } catch (e) {
        res.status(400)
        res.send("E")
        console.log(e)
    }
})

//Recuperer tous les commentaire d'un utilisateur pour un post
commentRouter.get('/:userId/:idPost', async(req, res) => {
    try {
        res.status(200)
        let idPost = req.params.idPost
        let userId = req.params.userId
        const comments = new Comment()
        res.send(await comments.getUserComments(idPost, userId))
    } catch (e) {
        res.status(400)
        res.send("E")
        console.log(e)
    }
})

//Creer un commentaire (Ajouter un post )
commentRouter.post('/:idPost', async(req, res) => {
    try {
        res.status(200)
        var user_id = req.body.user_id
        var text = req.body.text

        if (user_id == null || text == null) {
            return res.send({ error: "Tous les champs sont requis" })
        }
        let idPost = req.params.idPost
        let comment = new Comment(req.body.text, req.body.user_id)




        res.send(await comment.addComment(comment, idPost))
    } catch (e) {
        res.status(400)
        res.send('Database Error')
        console.error(e)
    }
})

//Modifier  un commentaire d'un post 
commentRouter.put('/:idComment', async(req, res) => {
    try {
        let idComment = req.params.idComment
        let data = {
            text: req.body.text
        }

        console.log(data)
        const comments = new Comment()
        res.status(200)
        res.send(await comments.modifycomment(idComment, data))
    } catch (e) {
        res.status(400)
        res.send('Database Error')
        console.error(e)
    }

})

//Supprimer un commentaire d'un poste 
commentRouter.delete('/:idComment/:idPost', async(req, res) => {
    try {
        res.status(200)
        let idComment = req.params.idComment
        let idPost = req.params.idPost
        const comments = new Comment()
        res.send(await comments.deleteCommentServices(idComment, idPost))
    } catch (e) {
        res.status(400)
        res.send('Database Error')
        console.error(e)
    }


})


export { commentRouter }