import express, { Application, Request, Response } from 'express';
import cv from './rutas/api/cv'

const app = express();
const PORT: number = 3002;


// Configurar cabeceras y cors
app.use((req, res, next) => {  
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'email, Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
  //res.header("email", req.headers.email);
  next();
});

app.get('/', (req: Request, res: Response) => {
  res.send('¡API Running v2!');
});

app.use('/api/cv', cv)


app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
