const mongoose = require('mongoose');

const opinionesSchema = new mongoose.Schema(
    {
        nombre: {
            type: String
        },
        correo: {
            type: String
        },
        edad: {
            type: Number
        },
        fecha: {
            type: String
        },
        opinion: {
            type:String
        }
    },
    {
        versionKey: false
    }
)

module.exports = mongoose.model('opinionesModel', opinionesSchema, 'opiniones')