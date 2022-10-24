import express from 'express'
import { User } from './UserModel.js';
const userRouter = express.Router()
//Recuperer un utilisateur
userRouter.get('/', (req, res)=>{

    try {
        res.status(200)
        res.send("Liste des utilisateurs")
    } catch (e) {
        res.status(400)
        res.send("E")
        console.log(e)
    }
})
//Inscription utilisateur
userRouter.user('/', (req, res)=>{
    
        try{
            res.status(200)
            let user = new User(req.body.id, req.body.nom, req.body.prenom, req.body.email, req.body.password)
    
    
            post.addUser(user)
    
            res.send('ok')
        } catch(e){
            res.status(400)
            res.send('Database Error')
            console.error(e)
        }
    

})
//Modifier un utilisateur
userRouter.put('/:userid' , (req, res)=>{

})
//Suprimer un utilisateur
userRouter.delete('/:userid', (req, res)=>{

})

export { userRouter }
