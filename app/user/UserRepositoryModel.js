import mongoose from 'mongoose'
import { stringify } from 'querystring'
import { UserSchema } from '../user/UserRepositoryModel'

export const UserSchema = new mongoose.Schema({
    id: string,
    nom : string,
    prenom : string,
    email : string,
    password: string,

    })

    export const UserModel = mongoose.model('User ' , UserSchema);

    export const getall= ()=>{}
    export const save= ()=>{}
    export const update= ()=>{}
    export const deleteuser= ()=>{}

