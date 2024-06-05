import express from 'express'
import usuarioRoutes from './routes/usuarioRoutes.js';

//Se crea la app
const app = express()

//Habilitar pug para usar como template
app.set('view engine', 'pug')
app.set('views', './views')

//carpeta publica/archivos estaticos
app.use(express.static('public'))

//Routing
app.use('/auth', usuarioRoutes)



//definir un puerto y arrancar el proyecto
const port = 3000;
app.listen(port,() => {
    console.log(`El servidor esta funcionando en el puerto ${port}`)
});


