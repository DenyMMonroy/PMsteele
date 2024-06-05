const tablaAsignacion = (req, res) => {
        res.render('auth/asignacion',{
          pagina:'Asignacion'
        })
        
    
}
const actividadesOperador = (req, res) => {
    res.render('auth/actividades',{
        pagina: 'Actividad'
    })

}
export{
    tablaAsignacion,
    actividadesOperador
}