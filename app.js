const express = require("express");
const mongoose = require("mongoose").
connect('mongodb://localhost/crud-proyecto')
.then(db => console.log("Conectado a la BD"))
.catch(err => console.log("Error en conexion"))


const app = express();
app.use(express.urlencoded({extended:true}))

const indiceRutas = require('./routes/index')

app.set('views', __dirname + "/vistas")
app.set('view engine', 'ejs')
app.use ('/', indiceRutas)
app.listen(3000, () => {
    console.log("servidor en marcha.")
})

