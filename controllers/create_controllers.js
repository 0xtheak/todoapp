const db = require('../config/mongoose');
const ToDos = require('../models/create');
const alert = require('alert');

module.exports.create = function(req, res){
    // alert the user when any fields is empty
   
    if(req.body.description == '' ||  req.body.date == '' ){
        alert('please check all values before click the add button');
        return res.redirect('back');
    }
    // putting data in the database
    ToDos.create ({
        description  : req.body.description,
        category : req.body.categories,
        dueDate : req.body.date,
    }, (err, newCreate) => {
        if(err){
            console.log('error in creating todos');
            return;
        }
        console.log('>>>>', newCreate);
        return res.redirect('back');
    });
}