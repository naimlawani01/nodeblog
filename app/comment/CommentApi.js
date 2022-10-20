import express from 'express';
const commentRouter = express.Router()

//Recuperer tous les Commentaiere 
commentRouter.get('/', (req, res) => {

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