import express from 'express'
const router = express.Router()

// ROTA Idosos
router.get("/idosos", function (req,res){
    const idosos = [
        {numero: "983721931", valor: 1200},
        {numero: "983721932", valor: 900},
        {numero: "983721933", valor: 3200},
        {numero: "983721934", valor: 150}
    ]
    res.render("idosos", {
        idosos: idosos
    })
})

export default router