import * as fs from 'fs';
import cvSchema from '../Interfaces/cvSchema';

export class CV{

    getDataCv = async (filePath:any)=> {
        // Ruta al archivo JSON
        var cvJsonData = null
        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
              console.error('Error al leer el archivo:', err);
              return;
            }        
            try {
              const jsonData: cvSchema = JSON.parse(data);
              cvJsonData =  jsonData
              console.log("jsonData : ", cvJsonData)
            } catch (error) {
              console.error('Error al analizar el archivo JSON:', error);
            }
          });
          /*console.log("cvJsonData : ", cvJsonData)*/
          return cvJsonData
    }
}