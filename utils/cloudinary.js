import {v2 as cloudinary} from 'cloudinary'
import {CL_CLIUD_NAME,CL_API_KEY,CL_API_SECRET} from '../config.js'

cloudinary.config({ 
    cloud_name: CL_CLIUD_NAME, 
    api_key: CL_API_KEY, 
    api_secret: CL_API_SECRET,
    secure: true
  });

export async function subirImagenPortada(filePath) {
    return await cloudinary.uploader.upload(filePath ,{
        folder: 'Portada'
    })
}

export async function subirImagenColeccion(filePath) {
    return await cloudinary.uploader.upload(filePath ,{
        folder: 'Coleccion'
    })
}

export async function borrarImagen(publicId) {
    return await cloudinary.uploader.destroy(publicId)
}