import express from "express";

const router = express.Router();

router.get('/asignacion', (req, res) => {
    res.render('auth/asignacion',{
        autenitcado: true
    })
});



export default router