import Router, { Request, Response} from "express";
import * as fs from 'fs';
import cvSchema from "../../Interfaces/cvSchema";

const router = Router()
const filePath: string = './curriculumVitae.json';

router.get('/', (req:Request, res:Response) => { 
    //localhost:3002/api/cv/
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
});

router.get("/consultar/:param", async(req: Request, res: Response)=>{
    //localhost:3002/api/cv/consultar/1
    console.log("req :", req.params.param)
    const id = req.params.param
    
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
          console.error('Error al leer el archivo:', err);
          return;
        }        
        try {
            var responseInfo:any
            const jsonData: cvSchema = JSON.parse(data); 

            if (id ==="basic") {
                responseInfo = jsonData.basics
            }else if(id ==="trabajo"){
                responseInfo = jsonData.trabajo
            }else if(id ==="educacion"){
                responseInfo = jsonData.educacion
            }else{
                responseInfo = {
                    message:"Error no existe informacion con el valor a buscar"
                }
            }
            return res.json(responseInfo);
        } catch (error) {
          console.error('Error al analizar el archivo JSON:', error);
        }
      });    
});

router.post("/update/datos", async(req: Request, res: Response)=>{  

    const body = JSON.parse(req.body)
    console.log("Body: ", body)

    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
          console.error('Error al leer el archivo:', err);
          return;
        }        
        try {
          const jsonData: cvSchema = JSON.parse(data); 

        // Modificar un dato existente
        jsonData.basics.nombre = body.nombre
         jsonData.basics.edad = body.edad
         jsonData.basics.email = body.email
         jsonData.basics.telefono = body.telefono
         //jsonData.educacion.cursos
         const updatedJsonData = JSON.stringify(jsonData, null, 2);
         
         // Escribir el JSON actualizado de vuelta al archivo
        fs.writeFile(filePath, updatedJsonData, 'utf8', (err) => {
            if (err) {
                console.error("Error al escribir en el archivo:", err);
                return;
            }
            console.log("Archivo JSON actualizado con éxito.");
            return res.status(200).json({
                message:"Archivo JSON actualizado con éxito"
            })
        });
        } catch (error) {
          console.error('Error al analizar el archivo JSON:', error);
        }
      });
});
export default router;
