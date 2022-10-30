import { Router } from 'express'
import {getfies1,crearReporte1,getfies1codigo,EliminarReporte1,actualizaReporte1} from '../controllers/reportes.controller.js'
const router  = Router()

router.get('/fies1', getfies1); //obtiene toda la informacion
router.get('/fies1/:codigofactura', getfies1codigo); //obntiene la informacion de un codigo

//router.get('/reportes_rodo', (req, res)=> res.send('Obtener reporte Rodo'))

router.post('/fies', crearReporte1)

router.patch('/fies/:codigo', actualizaReporte1)

router.delete('/fies/:codigo',EliminarReporte1)

export default router