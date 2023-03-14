// import the parent model for every instance of model
const db = require('../parentModel/base')


// define your model methods here example.
// getAllUsers = async() => await db.executeQuery('INSERT YOUR QUERY HERE')
// and then assign on the module exports (just add the property u created)



const getAllUsers = async (req) => await db.executeQuery('SELECT * FROM users')

const registerUser = async (req) => await db.executeQuery(`INSERT INTO users (first_name, email, password) VALUES ('${req.body.f_name}', '${req.body.email}', '${req.body.password}');`)



module.exports = {
    connect: db.connection,
    getAllUsers,
    registerUser,
}