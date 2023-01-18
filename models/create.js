const mongoose = require('mongoose');

const createSChema = new mongoose.Schema({
    description : {
        type : String,
        required : true
    },
    category : {
        type : String,
        required : true
    },
    dueDate : {
        type : String,
        required : true
    }
});

const ToDos = mongoose.model('ToDos', createSChema);

module.exports = ToDos;