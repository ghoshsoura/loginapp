// const express = require('express');
// const bodyParser = require('body-parser');
// const cors = require('cors');

// const app = express();

// var mysql = require('mysql');

// var con = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "password",
//   database: "users"
// });

// con.connect(function (err) {
//     if (err) throw err;
//     console.log("Connected!");
//     var sql = "select id,name from";
//     con.query(sql, function (err, result) {
//       if (err) throw err;
//       console.log("1 record inserted");
//     });
  
//   });
function login() {
  return (
    <h1 className="flex text-lg">Login successful</h1>
  )
}
export default login;