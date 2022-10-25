import mongoose from 'mongoose'

export const UserSchema = new mongoose.Schema({
    nom: String,
    prenom: String,
    email: String,
    password: String

})

export const UserModel = mongoose.model('User', UserSchema);

export const getAll= async() => {
    return await UserModel.find()
}
export const save = (user) => {
    console.log(user)
    let post_object = new UserModel({
        nom: user.nom,
        prenom: user.prenom,
        email: user.email,
        password: user.password

    })

    post_object.save((err) => {
        if (err) throw 'Save recountered a problem'
    })
}
export const exitUser = async(email) => {
    await UserModel.findOne({ email: email }).exec();
}
export const deleteUser = async(idUser) => {
    return await UserModel.deleteOne({ _id: idUser })
}