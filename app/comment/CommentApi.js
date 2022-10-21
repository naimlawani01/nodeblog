import express from 'express';
import { Comment } from './CommentModel.js';
const commentRouter = express.Router()

//Recuperer tous les Commentaiere 
commentRouter.get('/:idPost', async (req, res) => {
    try {
        res.status(200)
        const comments = new Comment()
        res.send(await comments.getComments(idPost))
    } catch (e) {
        res.status(400)
        res.send("E")
        console.log(e)
    }
})

//Recuperer tous les commentaire d'un utilisateur pour un post
commentRouter.get('/:userId', (req, res) => {

})

//Creer un commentaire (Ajouter un post )
commentRouter.post('/', (req, res) => {

})

//Modifier  un commentaire d'un post 
commentRouter.put('/:id', (req, res) => {

})

//Supprimer un commentaire d'un poste 
commentRouter.delete('/', (req, res) => {

})


export { commentRouter }