import express from 'express'
import usuarioRoutes from './routes/usuarioRoutes.js';

//Se crea la app
const app = express()

//Routing
app.use('/', usuarioRoutes)


//definir un puerto y arrancar el proyecto
const port = 3000;
app.listen(port,() => {
    console.log(`El servidor esta funcionando en el puerto ${port}`)
});


