import {Router} from 'express';
import { 
    obtenerColecciones,
    obtenerColeccion, 
    crearColeccion,
    editarColeccion,  
    eliminarColeccion, 
} from'../controllers/collects.controller.js'

const router = Router()

router.get('/colecciones', obtenerColecciones)
router.get('/colecciones/:id', obtenerColeccion)
router.post('/colecciones', crearColeccion)
router.put('/colecciones/:id', editarColeccion )
router.delete('/colecciones/:id', eliminarColeccion)

export default router