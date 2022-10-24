import mongoose from 'mongoose'
import {UserSchema} from '../user/UserRepositoryModel.js'
import {User} from './UserModel';

export const UserSchema = new mongoose.Schema({
    id: String,
    nom: String,
    prenom: String,
    email: String,
    password: String,
}, {timestamps: true})

export const UserModel = mongoose.model('User', UserSchema);

export const getAll = async () => {
    return await UserModel.find()
}

export const save = (user) => {
    let user_object = new UserModel({
        id: user.id,
        nom: user.nom,
        prenom: user.prenom,
        email: user.email,
        password: user.password,
    })

    usero_object.save((err) => {
        if (err) throw 'Save recountered a problem'
    })
}

export const update = () => {}
export const deleteuser = () => {}
