import { CV } from "../../utils/ReadCV";
import Router, { Request, Response} from "express";
import * as fs from 'fs';
import cvSchema from "../../Interfaces/cvSchema";

const cv = new CV();
const router = Router()

router.get('/consultar', async(req: Request, res: Response)=>{

    const filePath: string = './curriculumVitae.json';
    var dataInfo:any
    //res.json(await cv.getDataCv(filePath))
    //const  info = await cv.getDataCv()
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
          console.error('Error al leer el archivo:', err);
          return;
        }        
        try {
          const jsonData: cvSchema = JSON.parse(data);          
          //console.log("jsonData : ", jsonData)
          return res.json(jsonData);
        } catch (error) {
          console.error('Error al analizar el archivo JSON:', error);
        }
      });
})

router.post('/nuevo', async(req: Request, res: Response)=>{
    res.send('Metodo nuevo POST')
})

export default router;
