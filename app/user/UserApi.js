import express from 'express'
import bcrypt from 'bcrypt'
import { generateTokenForUser } from '../utils/jwt.utils.js'
import { User } from './UserModel.js'
import { UserModel } from './UserRepositoryModel.js'
const userRouter = express.Router()
    //Recuperer un utilisateur
userRouter.get('/', (req, res) => {

    try {
        res.status(200)
        res.send("Liste des utilisateurs")
    } catch (e) {
        res.status(400)
        res.send("E")
        console.log(e)
    }
})
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
    //Modifier un utilisateur
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


export { userRouter }