import Producto from '../models/product.model.js'
import Coleccion from '../models/colecciones.model.js'
import { subirImagenPortada ,borrarImagen } from '../utils/cloudinary.js' 
import fs from 'fs-extra'
//Lista de productos
export const obtenerProductos = async (req, res) => {
    try {
        const productos = await Producto.find().populate('colecciones')
        res.json(productos)
    }
    catch (error) {
        return res.status(500).json({message:error.message})
    }
}

//Info de un producto
export const obtenerProducto  = async (req, res) => {
   try {
        const producto = await Producto.findById(req.params.id)
        if(!producto){
            return res.status(404).json({ message:'El porducto no existe'})
        }
        return res.json(producto)
   } catch (error) {
        return res.status(500).json({message:error.message})
   }
}

//Agregar productos a la BD
export const crearProducto    = async (req, res) => {
    try {
        const { nombre, colecciones, descripcion, precio} = req.body;
        const producto = new Producto({nombre, colecciones, descripcion, precio })
        if (req.files?.imagenPortada) {
            const result = await subirImagenPortada(req.files.imagenPortada.tempFilePath)
            //console.log(result);
            producto.imagenPortada = {
                public_id: result.public_id,
                secure_url: result.secure_url,
            }
             await fs.unlink(req.files.imagenPortada.tempFilePath)
        }
        await producto.save()
        res.json(producto)
        //console.log(nombre, coleccion, descripcion, precio)
    } catch (error) {
        return res.status(500).json({message:error.message})
    }
}


//Editar producto
export const editarProducto   = async (req, res) => {
    try {
        const {id} = req.params;
        const productoActualizado = await Producto.findByIdAndUpdate(id ,req.body,{new:true})
        return res.json(productoActualizado)
    } catch (error) {
        return res.status(500).json({message:error.message})
    }
}

//Eliminar un producto
export const eliminarProducto = async (req, res) => {
    try {
        const producto = await Producto.findByIdAndDelete(req.params.id)
        if(!producto){
            return res.status(404).json({message:'El porducto no existe'})
        }
        if(producto.imagenPortada.public_id){
            await borrarImagen( producto.imagenPortada.public_id)
        }
        return res.send(producto)
    } catch (error) {
        return res.status(500).json({message:error.message})
    }
}
