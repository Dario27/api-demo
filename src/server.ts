import express, { Application, Request, Response } from 'express';
import * as rutas from './rutas/api/cv'

const app: Application = express();
const PORT: number = 3002;

app.get('/', (req: Request, res: Response) => {
  res.send('¡Hola, mundo!');
});

app.use('/api/cv/', rutas.default)
app.use('/api/cv/agregar', rutas.default)


app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
