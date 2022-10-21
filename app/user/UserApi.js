import express from 'express'
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
userRouter.post('/', (req, res)=>{

})
//Modifier un utilisateur
userRouter.put('/:userid' , (req, res)=>{

})
//Suprimer un utilisateur
userRouter.delete('/:userid', (req, res)=>{

})


export { userRouter }




