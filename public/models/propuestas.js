var mongoose = require('mongoose');
var Schema = mongoose.Schema;
/**
 * var types:
 * string
 * number
 * date
 */
var propuestaSchema = new Schema({
    cedula: String,
    nombre: String,
    apellido: String,
    tipo: String,
    fecha: String,
    asunto: String,
    titulo: String
});

mongoose.model('propuesta', propuestaSchema);