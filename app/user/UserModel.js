import { save } from "./UserRepositoryModel.js"

export class User {
    nom
    prenom
    email
    password

    constructor(nom, prenom, email, password) {
        this.nom = nom
        this.prenom = prenom
        this.email = email
        this.password = password

    }

    addUser(user) {
        return save(user)
    }

}