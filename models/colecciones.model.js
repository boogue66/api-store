import mongoose from "mongoose";

const collectSchema = mongoose.Schema({
    titulo:{
        type: String,
        trim: true,
        required: false,
    },
    descripcion:{
        type:String,
        trim: true,
    },
    precio:{
        type: Number,
        default: 0,
    },
    disponibilidad:{
        type: Boolean,
        default: false,
    },
    imagenColeccion:[{
        public_id: String, 
        secure_url: String,
    }],
})

export default mongoose.model('Coleccion', collectSchema)