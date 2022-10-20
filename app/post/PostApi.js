import express from 'express';
const postRouter = express.Router()

//Recuperer tous les posts 
postRouter.get('/', (req, res) => {
    try {
        res.status(200)
        res.send("Liste des postes")
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