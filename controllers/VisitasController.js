import express from 'express'
const router = express.Router()

// ROTA Visitas
router.get("/visitas", function (req,res){
    const visitas = [
        {numero: "983721931", valor: 1200},
        {numero: "983721932", valor: 900},
        {numero: "983721933", valor: 3200},
        {numero: "983721934", valor: 150}
    ]
    res.render("visitas", {
        visitas: visitas
    })
})

export default router