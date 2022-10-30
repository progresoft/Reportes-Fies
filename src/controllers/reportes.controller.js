import {pool} from '../db.js'

export const getfies1 = async (req, res)=> {
    try {
        const [rows] = await pool.query('Select * from fact_recaudo_cliente')
        //const [rows] = await pool.query('Select * from fact_recaudo_cliente ORDER BY codigousuario ASC LIMIT 3 ')
        /*const [result] = await pool.query('Select 1 + 1 AS result')*/
        res.json(rows)
    } catch (error) {
        return res.status(500).json({
            mensaje: 'Error al consultar fact_recaudo_cliente'
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