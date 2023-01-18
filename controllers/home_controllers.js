const db = require('../config/mongoose');
const ToDos = require('../models/create');

module.exports.home = function(req, res){
    ToDos.find({}, (err, todos) =>{
        if(err){
            console.log('error in fetching data from the database');
            return;
        }
        return res.render('home', {
            title : 'Home Page',
            todosList : todos
        });

    })

    
}