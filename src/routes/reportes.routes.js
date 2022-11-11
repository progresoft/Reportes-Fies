import { Router } from 'express'
import { getReportes
        ,getfies
        ,getfies1codigo
        ,UsuarioLogin
        ,LoginInfo
        ,getClientes
        ,getFacturas
        ,crearReporte1
        ,EliminarReporte1
        ,actualizaReporte1
       } from '../controllers/reportes.controller.js'

const router  = Router()

//router.get('/ejemplo, (req, res)=> res.send('mensaj ejemplo'))

router.post('/login', UsuarioLogin) //login token

//Funcion validar token
function ensureToken(req, res, next){
    const bearerHeader = req.headers['authorization'];
    console.log(bearerHeader)
    if(typeof bearerHeader !== 'undefined'){
        const bearer = bearerHeader.split(" ");
        const barerToken = bearer[1];
        req.token = barerToken;
        next();
    }else{
        res.sendStatus(404);
    }
}

router.get('/info', ensureToken, LoginInfo) //Apli validar  token

router.get('/reportes', getReportes); //obtiene los reportes 

router.get('/fies/:idReporte', getfies); //obtiene toda la informacion de un reporte

router.get('/fies1/:codigofactura', getfies1codigo); //obtiene la informacion de un codigo de factura

router.get('/clientes', getClientes); //obtiene Clientes

router.get('/facturas', getFacturas); //obtiene Clientes

router.post('/fies', crearReporte1) //Crea informacion(metodo vacio solo es ejemplo)

router.patch('/fies/:codigo', actualizaReporte1)//actualiza informacion (metodo vacio solo es ejemplo)

router.delete('/fies/:codigo',EliminarReporte1) //elimina informacion  (metodo vacio solo es ejemplo)

export default router