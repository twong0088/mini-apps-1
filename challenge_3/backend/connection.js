var mysql = require('mysql');

var connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: '12442Knott',
  database: 'webstore'
});

connection.connect();

module.exports.connection = connection;