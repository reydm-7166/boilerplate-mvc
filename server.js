const express = require('express');
const app = express();
const bodyParser = require('body-parser')

const userModule = require('./routes')

app.use(express.static(__dirname + "/public"));

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');





app.use(bodyParser.urlencoded({extended: true}));

app.use('/', userModule);

// app.use('/admin', userModule);


app.listen(8000);