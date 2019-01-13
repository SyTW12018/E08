var mongoose = require("mongoose");

const Schema = mongoose.Schema;

let Issue = new Schema({
    nombre: {
        type: String
    },
    apellido1: {
        type: String
    },
    apellido2: {
        type: String
    },
    fecha: {
        type: String
    },
    contrasena: {
        type: String
    },
    correo: {
        type: String
    }
});

// export default mongoose.model('Issue', Issue);
module.exports = mongoose.model('Issue', Issue);
