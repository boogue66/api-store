import mongoose from "mongoose";

const productSchema = mongoose.Schema({
    nombre:{
        type: String,
        trim: true,
        required: false,
    },
    descripcion:{
        type:String,
        trim: true,
    },
    disponibilidad:{
        type: Boolean,
        default: false,
    },
    imagenPortada:{
        public_id: String, 
        secure_url: String,
    },
    colecciones:[{
        type: mongoose.Types.ObjectId,
        ref: 'Coleccion',
        required: true
    }],
},{ 
    timestamps:  {
        createdAt: 'creado_el',
        updatedAt: 'actualizado_el'
    }
})

export default mongoose.model('Producto', productSchema)