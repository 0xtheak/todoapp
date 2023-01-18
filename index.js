const express = require("express");
const port = 8000;
const app = express();
const db = require('./config/mongoose');
const ToDos = require('./models/create');

app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.urlencoded());
app.use(express.static('assets'));

// use express router
app.use('/', require('./routes/home'))

app.listen(port, (err) => {
    if(err){
        console.log(`Error: ${err}`);
        return;
    }

    console.log(`Server is running on port : ${port}`);
})