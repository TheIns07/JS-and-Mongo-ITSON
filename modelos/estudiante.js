const mongoose = require("mongoose");
const Esquema = mongoose.Schema;

const estEsquema = new Esquema({
    id: String,
    nombre: String,
    aprobado: {
        type: Boolean,
        default: false
    }
});
//colleccion de estudiantes en la db
module.exports = mongoose.model('estudiantes',estEsquema);