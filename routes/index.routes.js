import {Router} from 'express'

const router = Router()

//Rutas
router.get('/', (req,res)=>{
    res.send('Bienvenido a mi primer API');
})
router.get('/uploads', (req,res)=>{
    res.send('Los archivos estan ocultos');
})

export default router