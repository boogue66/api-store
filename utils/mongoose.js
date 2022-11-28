import mongoose from "mongoose";
import {MONGODB_URI} from '../config.js'


export async function conectarBD() {
    try{
        await mongoose.connect(MONGODB_URI)
        console.log('Se a conectado a la base de datos de MongoBD')
    }catch (error) {
       console.error(error)
    }
} 
