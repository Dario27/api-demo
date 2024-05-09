import Router, { Request, Response} from "express";


const router = Router()

router.get('/consultar', async(req: Request, res: Response)=>{
    res.send('Metodo consultar')
})

router.post('/nuevo', async(req: Request, res: Response)=>{
    res.send('Metodo nuevo POST')
})

export default router;
