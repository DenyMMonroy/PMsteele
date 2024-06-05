import express from "express";
import {tablaAsignacion,
        actividadesOperador
 } from '../Controllers/usuarioController.js'

const router = express.Router();

router.get('/asignacion', tablaAsignacion);
router.get('/actividades', actividadesOperador);



export default router