import {pool} from '../db.js'
import jwt from 'jsonwebtoken'
import {KEY} from '../keys.js/'


export const UsuarioLogin = async (req, res)=> {
    try {
        const {usuario, clave} = req.body   //captura los datos enviados por jason en el sevicio 
        console.log(usuario, clave)
        const [rows] = await pool.query('Select * from Usuarios_Api WHERE  usuario = ? AND clave = ?', [usuario, clave])
        if (rows.length  <=0) return res.status(404).json({ //rows.length devuelve la cantidad de elementos que tiene el arreglo
            mensaje: 'Usuario y/o clave incorrectos'
        })
        //TOKEN
        const payload ={
            check:true
        };
        const token = jwt.sign(payload, KEY,{
            expiresIn:'250s'
        })

        console.log(rows)
        res.json({
            id: rows[0].id,
            rol: rows[0].Rol,
            mensaje:'Autenticacion exitosa',
            token: token
        })
    } catch (error) {
        return res.status(500).json({
            mensaje: 'Error al verificar existencia de usuario'
        })
    }

}

export const LoginInfo = async (req, res)=> {
    try {
        jwt.verify(req.token,KEY,(err,data) =>{
            if(err){
                res.sendStatus(404);
            }else{
                res.json({
                    mensaje:'Login exitoso'
                    //,data
                })
            }
        })
    } catch (error) {
        return res.status(500).json({
            mensaje: 'Error en ruta LoginInfo'
        })
    }
}

export const getReportes = async (req, res)=> {
    try {
            const [rows] = await pool.query('Select * from Reportes_api ORDER BY ID ASC')
            if (rows.length  <=0) return res.status(404).json({ //rows.length devuelve la cantidad de elementos que tiene el arreglo
                mensaje: 'No existen reportes registrados'
            })
            res.json(rows)
        }
    catch (error) {
        return res.status(500).json({
            mensaje: 'Error al consultar informacion en Reportes_api'
        })
    }
}

export const getfies = async (req, res)=> {
    try {
        const {idReporte} = req.params
        console.log(idReporte)
        switch (idReporte) {
            case '1': 
                    const [rows] = await pool.query('Select * from fact_recaudo_cliente ORDER BY codigousuario ASC')
                    res.json(rows)
                    break;
            default:
                return res.status(500).json({
                    mensaje: 'El reporte '+ idReporte +' no existe o no tiene consulta para obtener datos'
                })
        }
        //const [rows] = await pool.query('Select * from fact_recaudo_cliente ')
        // const [rows] = await pool.query('Select * from fact_recaudo_cliente ORDER BY codigousuario ASC LIMIT 3 ')
        /*const [result] = await pool.query('Select 1 + 1 AS result')*/
       // res.json(rows)
    } catch (error) {
        return res.status(500).json({
            mensaje: 'Error al consultar informacion del reporte'
        })
    }
}

export const getfies1codigo = async (req, res)=> {
    try {
        //console.log(req.params.codigofactura) //Muestra en consola el parametro ingresado
        const [rows] = await pool.query('Select * from fact_recaudo_cliente WHERE  NroFactura = ?', [req.params.codigofactura])
        //console.log(rows)
        if (rows.length  <=0) return res.status(404).json({ //rows.length devuelve la cantidad de elementos que tiene el arreglo
            mensaje: 'Factura no existe'
        })
        res.json(rows)
    } catch (error) {
        return res.status(500).json({
            mensaje: 'Error al consultar fact_recaudo_cliente por codigo de factura'
        })
    }
}

export const getClientes = async (req, res)=> {
    try {
            //const [rows] = await pool.query('Select * from Clientes ORDER BY Codigo ASC LIMIT 3')
            const [rows] = await pool.query('Select * from Clientes ORDER BY Codigo ASC')
            if (rows.length  <=0) return res.status(404).json({ //rows.length devuelve la cantidad de elementos que tiene el arreglo
                mensaje: 'No existen clientes registrados'
            })
            res.json(rows)
        }
    catch (error) {
        return res.status(500).json({
            mensaje: 'Error al consultar informacion en la tabla Clientes'
        })
    }
}

export const getFacturas = async (req, res)=> {
    try {
            //const [rows] = await pool.query('Select * from Mfactura  ORDER BY Codigo ASC LIMIT 3')
            const [rows] = await pool.query('Select * from Mfactura  ORDER BY Codigo ASC')
            if (rows.length  <=0) return res.status(404).json({ //rows.length devuelve la cantidad de elementos que tiene el arreglo
                mensaje: 'No existen facturas registradas'
            })
            res.json(rows)
        }
    catch (error) {
        return res.status(500).json({
            mensaje: 'Error al consultar informacion en la tabla Mfactura'
        })
    }
}

export const crearReporte1 = async (req, res)=> {
    // const {campo1, campo2} = req.body   //captura los datos enviados por jason en el sevicio 
    //const [rows] = await pool.query('INSERT INTO TABLA  (CAMPO1, CAMPO2) VALUES (?,?)', [campo1, campo2]) //pasa los datos capturados al query
    //res.send({ rows })    //devuelve  un arreglo de fila como respuestas
    /*res.send(
        {
            id: rows.insertId,
            campo1,
            campo2,
        }
    )*/    //devuelve las filas de que queiro que muestre en la respuesta en este caso el id de inserccion y  los dos campos recibidos.
    console.log(req.body)
    res.send('Datos Creados')
}

export const EliminarReporte1 = async (req, res)=> {
    console.log(req.params.codigo) //Muestra en consola el parametro ingresado
    //const [result] = await pool.query('DELETE FROM  TABLA WHERE  codigo = ?', [req.params.codigo])
    //console.log(result)
    /*if (result.affectedRows < 0 )  return res.status(404).json ({  // result.affectedRows Verifica que haya filas afectadas al eliminar 
        menssage: 'No se encontro registro para eliminar'
    })*/
    //res.sendStatus(204) //Se envia codigo 204  para confirmar que si se elimino el registro
    res.send('Elimina reporte') 
}

export const actualizaReporte1 =  async (req, res)=> {
    const {codigo} = req.params
    const {campo1,campo2} = req.body
    //const [result] = await pool.query('UPDATE tabla Set campo1 = IFNULL(?,campo1), campo2 = IFNULL(?,campo2) WHERE codigo = ?', [campo1, campo2, codigo])
    //console.log(result)
    //console.log(codigo,campo1, campo2)
    /*if (result.affectedRows === 0 ) return res.status(404).json({ //rows.length devuelve la cantidad de elementos que tiene el arreglo
        menssage: 'El dato a actualizar no existe'
    })
    
    const [rows] = await pool.query('Select * from tabla WHERE  codigo = ?', [codigo])
    res.json(rows[0])
    */
    res.json('Actualizacion recibida')
}