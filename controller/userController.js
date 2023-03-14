const express = require('express');
const app = express();
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended: true}));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

const db = require('../model/childModel/users')

module.exports = {
    userView : async (req, res) => {
        res.render('users/index')
    },
    userLoginView: async (req, res) => {
        let result = await db.getAllUsers(req);
        res.json(result)
    },
    userLogin: async (req, res) => {
        res.render('users/login')

    },
    userRegister: async (req, res) => {
        if(db.connect){
            let result = await db.registerUser(req)
            
            if(result !== undefined){
                console.log(result)
            } else {
                console.log("error")
            }
        }
    }
}