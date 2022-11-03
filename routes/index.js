const express = require("express");
const routes = express.Router();
const Estud = require('../modelos/estudiante')

routes.get('/', async (req, res) => {
    const listaEstudiantes = await Estud.find()
    res.render('../vistas/hola.ejs', {listaEstudiantes})
    console.log(listaEstudiantes)
})

routes.post('/estudiantes', async(req, res) => {
   var e = new Estud(req.body)
   await Estud.insertMany(e);
   res.redirect("/");
})

routes.get("/estudiantes/:id", async(req, res) =>{
    idClient = req.params.id
    await Estud.deleteOne({id:idClient})
    res.redirect("/");
})

routes.get("/estudiantes/:id", async(req, res) =>{
    idClient = req.params.id
    await Estud.updateOne({id:idClient});
    res.redirect("/");
})

module.exports = routes;