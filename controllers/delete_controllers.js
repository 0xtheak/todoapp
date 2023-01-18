const db = require('../config/mongoose');
const ToDos = require('../models/create');

module.exports.delete = function(req, res){
    // console.log(req.query.id);
    let id = req.query.id;
    // data find by id and delete
    ToDos.findByIdAndDelete(id, (err) => {
        if(err){
            console.log('error in deleting the data');
            return;
        }
        // console.log('data deleted successfully');
        return res.redirect('back');
    });
}