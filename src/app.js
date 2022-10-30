import express from 'express'
import reportesRoutes from './routes/reportes.routes.js'

const app = express()


app.use(express.json())

app.use('/api',reportesRoutes)

app.use((req, res, next) => {
    res.status(404).json({
        mensaje: 'Ruta Api Invalida'
    })
})

export default app;
