import mysql from 'mysql';

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: 'user_management_api'
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("Connected successfully to Database!");
});

export default connection;