import cors from "cors";
import morgan from'morgan';
import express, { json } from 'express';
import fileUpload from 'express-fileupload';

import rutasPadre from './routes/index.routes.js'
import rutashija1 from './routes/products.routes.js'
import rutashija2 from './routes/collects.routes.js'

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(fileUpload({
    useTempFiles : true,
    tempFileDir : './uploads'
}));

app.use(rutasPadre);
app.use(rutashija1);
app.use(rutashija2);

export default app