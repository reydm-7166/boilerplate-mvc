const express = require('express');
const app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

module.exports = {
    adminView: (req, res) => {
        res.render('admin/admin')
    },
    adminLogin: (req, res) => {
        res.render('admin/login')
    },
}