import express from 'express';
import { Comment } from './CommentModel.js';
const commentRouter = express.Router()

//Recuperer tous les Commentaiere 
commentRouter.get('/:idPost', async(req, res) => {
    try {
        res.status(200)
        let idPost = req.params.idPost
        const comments = new Comment()
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
commentRouter.put('/:id', (req, res) => {

})

//Supprimer un commentaire d'un poste 
commentRouter.delete('/', (req, res) => {

})


export { commentRouter }