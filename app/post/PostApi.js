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

// Recuperer un post 
postRouter.get('/:id', async(req, res) => {
    try {
        res.status(200)
        let id = req.params.id
        const posts = new Post()
        res.send(await posts.findPost(id))
    } catch (e) {
        res.status(400)
        res.send("E")
        console.log(e)
    }
})


//Creer un post (Ajouter un post )
postRouter.post('/', (req, res) => {
    try {
        res.status(200)
        var id = req.body.id
        var title = req.body.title
        var content = req.body.content
        var user_id = req.body.user_id

        if (id == null || title == null || content == null || user_id == null) {
            return res.send({ error: "Tous les champs sont requis" })
        }
        let post = new Post(req.body.id, req.body.title, req.body.content, req.body.user_id, [])


        post.addPost(post)

        res.send('Bien ajouté')
    } catch (e) {
        res.status(400)
        res.send('Database Error')
        console.error(e)
    }


})

//Modifier  un post 
postRouter.put('/:idPost', async(req, res) => {
    try {
        res.status(200)
        let idPost = req.params.idPost
        let data = {
            title: req.body.title,
            content: req.body.content
        }
        const posts = new Post()
        res.send(await posts.modifyPost(idPost, data))
    } catch (e) {
        res.status(400)
        res.send('Database Error')
        console.error(e)
    }

})

//Supprimer un poste 
postRouter.delete('/:id', async(req, res) => {
    try {
        res.status(200)
        let id = req.params.id
        const posts = new Post()
        res.send(await posts.deletePostServices(id))
    } catch (e) {
        res.status(400)
        res.send('Database Error')
        console.error(e)
    }

})




export { postRouter }