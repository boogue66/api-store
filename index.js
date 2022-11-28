import app from './app.js'
import {conectarBD} from './utils/mongoose.js';

//Conexion a la BD
async function main() {
    await conectarBD()
    app.listen(3000) 
    console.log( 'El servicio inicializado en el puerto', 3000)
}

main()