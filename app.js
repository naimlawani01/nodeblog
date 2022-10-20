import express from 'express'
import mongoose from 'mongoose';
import { router } from './app/Shop/ShopApi.js';
import BodyParser from 'body-parser'
export const app = express();


export const connection = async() => {
  console.log('base de donnée connectée')
  await mongoose.connect('mongodb+srv://ayoubm:bLAsfK6QPvSI2zVA@cluster0.pqsbndn.mongodb.net/test'); 
}

app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: true }));




export const db = mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB connection error:"));

export default app


