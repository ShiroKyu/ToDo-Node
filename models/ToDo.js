const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ToDo = new Schema({
    descricao: {
        type: String,
        required: true
    }
})

mongoose.model('toDos', ToDo)