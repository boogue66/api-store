
import Coleccion from '../models/colecciones.model.js'
import { subirImagenColeccion ,borrarImagen } from '../utils/cloudinary.js' 
import fs from 'fs-extra'

//Lista de productos
export const obtenerColecciones = async (req, res) => {
    try {
        const coleccion = await Coleccion.find()
        res.json(coleccion)
    }
    catch (error) {
        return res.status(500).json({message:error.message})
    }
}

//Info de un producto
export const obtenerColeccion  = async (req, res) => {
   try {
        const coleccion = await Coleccion.findById(req.params.id)
        if(!coleccion){
            return res.status(404).json({ message:'La collecion no existe'})
        }
        return res.json(coleccion)
   } catch (error) {
        return res.status(500).json({message:error.message})
   }
}

//Agregar colleciones a la BD
export const crearColeccion  = async (req, res) => {
    try {
        const { titulo, descripcion, precio } = req.body;
        const coleccion = new Coleccion({titulo, descripcion, precio })
        console.log(req.body)
        
        if (req.files?.imagenColeccion) {
            for (var i = 0; i < req.files.length; i++) {
                const result = await subirImagenColeccion(req.files[i].imagenColeccion.tempFilePath)
            //console.log(result);
                coleccion.imagenColeccion = {
                    public_id: result.public_id,
                    secure_url: result.secure_url,
                }
                await fs.unlink(req.files[i].imagenColeccion.tempFilePath)
            }
        }
        await coleccion.save()
        res.json(coleccion)
        //console.log(nombre, coleccion, descripcion, precio)
    } catch (error) {
        return res.status(500).json({message:error.message})
    }
}

//Editar producto
export const editarColeccion   = async (req, res) => {
    try {
        const {id} = req.params;
        const coleccionActualizada = await Coleccion.findByIdAndUpdate(id ,req.body,{new:true})
        return res.json(coleccionActualizada)
    } catch (error) {
        return res.status(500).json({message:error.message})
    }
}

//Eliminar un producto
export const eliminarColeccion = async (req, res) => {
    try {
        const coleccion = await Coleccion.findByIdAndDelete(req.params.id)
        if(!coleccion){
            return res.status(404).json({message:'El porducto no existe'})
        }
        if(coleccion.imagenColeccion.public_id){
            await borrarImagen( coleccion.imagenColeccion.public_id)
        }
        return res.send(coleccion)
    } catch (error) {
        return res.status(500).json({message:error.message})
    }
}
