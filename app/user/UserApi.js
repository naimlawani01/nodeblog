import express from 'express'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { generateTokenForUser, JWT_SIGN_SECRET } from '../utils/jwt.utils.js'
import { User } from './UserModel.js'
import { Post } from '../post/PostModel.js'
const userRouter = express.Router()

//Recuperer tous les utilisateur
userRouter.get('/', async(req, res) => {

        try {
            res.status(200)
            const users = new User()
            res.send(await users.getAllUser())
        } catch (e) {
            res.status(400)
            res.send("E")
            console.log(e)
        }
    })
    //ajouter (connecter) un utilisateur
userRouter.post('/login', (req, res) => {
        try {
            res.status(200)
            var email = req.body.email
            var password = req.body.password
            if (email == null || password == null) {
                return res.send({ error: "Tous les champs sont requis" })
            }

            // Verrifier l'existence d'un utilisateur avant de le créer 
            UserModel.findOne({ email: email }, function(err, user) {

                if (user) {

                    // Crypter le mot de passe 
                    bcrypt.compare(password, user.password, function(errBycrypt, resBycrypt) {
                        if (resBycrypt) {
                            res.status(200)
                            return res.send({
                                userId: user._id,
                                "Token": generateTokenForUser(user)
                            })
                        } else {
                            res.status(402)
                            return res.send({ error: "Mot de passe ne correspont pas" })

                        }
                    })
                } else {
                    res.status(409)
                    res.send({ "error": "L'utilisateur n'existe pas" })
                }
            })
        } catch (e) {
            res.status(400)
            res.send("E")
            console.log(e)
        }
    })
    //ajout (s'inscrire)un utilisateur
userRouter.post('/signup', (req, res) => {
        try {

            var nom = req.body.nom
            var prenom = req.body.prenom
            var email = req.body.email
            var password = req.body.password
                // tester que tous les champs sont entrés 
            if (nom == null || prenom == null || email == null || password == null) {
                return res.send({ error: "Tous les champs sont requis" })
            }
            // Verrifier l'existence d'un utilisateur avant de le créer 
            UserModel.findOne({ email: email }, function(err, user) {
                console.log(user)
                if (!user) {

                    // Crypter le mot de passe 
                    const hash = bcrypt.hashSync(req.body.password, 5);
                    console.log(hash);

                    //Initialisation et enregistrement de l'utilisateur
                    let user = new User(req.body.nom, req.body.prenom, req.body.email, hash)
                    user.addUser(user)
                    res.status(200)
                    res.send("Bien créé")
                } else {
                    res.status(409)
                    res.send({ "error": "L'utilisateur existe déja" })
                }
            })





        } catch (e) {
            res.status(400)
            res.send("E")
            console.log(e)
        }



    })
    //Supprimer un utlisateur
userRouter.delete('/:idUser', async(req, res) => {
    try {
        res.status(200)
        let idUser = req.params.idUser
        const users = new User()
        res.send(await users.deleteUserServices(idUser))
    } catch (e) {
        res.status(400)
        res.send('Database Error')
        console.error(e)
    }
})

//Recuperer tous les posts pour un utilisateur
userRouter.get('/userpost', async(req, res) => {
    try {
        res.status(200)
        const token = req.headers.authorization.split(' ')[1];
        const decodedToken = jwt.verify(token, JWT_SIGN_SECRET);

        const userId = decodedToken.userId;

        let posts = new Post()
        res.send(await posts.getAllUserPostServices(userId))
        res.send(userId)
    } catch (e) {
        res.status(400)
        res.send("E")
        console.log(e)
    }
})
export { userRouter }