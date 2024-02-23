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
//     var sql = "INSERT INTO customers (id, name, address) VALUES ('1','Amitava','123 LOUDON ST, 9 EAST VIRIGINIA')";
//     con.query(sql, function (err, result) {
//       if (err) throw err;
//       console.log("1 record inserted");
//     });
  
//   });

function singup() {
  return (
    <h1 className="flex text-lg">Signup successful</h1>
  )
}
export default singup;