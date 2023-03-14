const mysql = require('mysql')
const connection      = mysql.createConnection({
    "host": "localhost",
    "user": "root",
    "password": "password",
    "database": "boiler",
    "port": 3306
});

const executeQuery = (query) => {
    mysql.format(query)
    return new Promise((resolve, reject) => {
        connection.query(query, async (err, result) => {
           resolve (await result)
        })
    })
}
module.exports = {
    connection,
    executeQuery,
}