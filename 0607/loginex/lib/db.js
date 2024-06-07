var mysql = require('mysql2');

var db = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    port: 3306,
    password: '123456',
    database: 'user_credentials'
});
db.connect();
module.exports = db;