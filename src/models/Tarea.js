const mongoose = require("mongoose");

const {Schema} = mongoose;


const Tarea = new Schema ({
    tarea : {type : String, required: true },
    hecho : {type:Boolean, required: true}
})

module.exports = mongoose.model('Tareas', Tarea);