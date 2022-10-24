import mongoose from 'mongoose'
import {UserSchema} from '../user/UserRepositoryModel.js'

export const UserSchema = new mongoose.Schema({
    id: String,
    nom: String,
    prenom: String,
    email: String,
    password: String,
}, { timestamps: true })

export const UserModel = mongoose.model('User', UserSchema);

export const getAll = async() => {
    return await  UserModel.find()
}

export const save = () => {
}
export const update = () => {
}
export const deleteuser = () => {
}

