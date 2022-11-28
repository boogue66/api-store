import {Router} from 'express';
import { 
    obtenerProductos,
    obtenerProducto, 
    crearProducto,  
    editarProducto,  
    eliminarProducto, 
} from'../controllers/products.controller.js'

const router = Router()

router.get('/productos', obtenerProductos)
router.get('/productos/:id', obtenerProducto)
router.post('/productos', crearProducto)
router.put('/productos/:id', editarProducto )
router.delete('/productos/:id', eliminarProducto)

export default router
