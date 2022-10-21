import express from 'express';
import { Post } from './PostModel.js';
const postRouter = express.Router()

//Recuperer tous les posts 
postRouter.get('/', async(req, res) => {
    try {
        res.status(200)
        const posts = new Post()
        res.send(await posts.getAllPost())
    } catch (e) {
        res.status(400)
        res.send("E")
        console.log(e)
    }
})

//Recuperer tous les posts pour un utilisateur
postRouter.get('/:userId', (req, res) => {

})

//Creer un post (Ajouter un post )
postRouter.post('/', (req, res) => {

})

//Modifier  un post 
postRouter.put('/:id', (req, res) => {

})

//Supprimer un poste 
postRouter.delete('/', (req, res) => {

})


export { postRouter }