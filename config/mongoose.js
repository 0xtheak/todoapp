const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/todoapp');
const db = mongoose.connection;
db.on('error', console.log.bind(console, 'error on connecting to db'));

db.once('open', () => {
    console.log('successfully connected to the database');
})