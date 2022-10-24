import {getAll, save} from "./UserRepositoryModel.js";

export class User {
    id
    nom
    prenom
    email
    password

    constructor(id, nom, prenom, email, password) {
        this.id = id
        this.nom = nom
        this.prenom = prenom
        this.email = email
        this.password = password
    }

    getAllUser() {
        return getAll()
    }

    addUser(user){
        return save(user)
    }

}
