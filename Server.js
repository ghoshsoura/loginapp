const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "users"
});

function executeQuery(sql, values) {
  return new Promise((resolve, reject) => {
    con.query(sql, values, (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve(results);
        console.log("record inserted");
      }
    });
  });
}

// con.connect(function (err) {
//   if (err) throw err;
//   console.log("Connected!");
//   var sql = "CREATE TABLE Employees (username CHAR PRIMARY KEY, email VARCHAR(255), password VARCHAR(255))";
//   con.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log("Table created");
//   });
// });

// con.connect(function (err) {
//   if (err) throw err;
//   console.log("Connected!");
//   var sql = "INSERT INTO customers (id, name, address) VALUES ('1','Amitava','123 LOUDON ST, 9 EAST VIRIGINIA')";
//   con.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log("1 record inserted");
//   });

// });

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Dummy authentication logic (replace with your actual logic)
// const users = {
//   'user1': 'password1',
//   'user2': 'password2',
// };

app.post('/src/api/signup.js', async (req, res) => {
  
  try {
    const { username, email, password } = req.body;
    // Validate input (sanitize and apply relevant checks)

    const hashedPassword = await bcrypt.hash(password, 10); // Hash password

    const sql = `INSERT INTO Employees (username, email, password) VALUES (?, ?, ?)`;
    const values = [username, email, hashedPassword];

    await executeQuery(sql, values);
    

    res.redirect('/src/api/signup.js')
  } catch (error) {
    console.error('Signup error:', error);
    res.status(500).json({ message: 'Signup failed' });
  }
});

app.post('/src/api/login.js', async (req, res) => {
  const { username, password } = req.body;
  const query = 'SELECT username,password from Employees where username=? and password=?';
  con.query(query,[username,password], (err,results)=>{
    if(err){
      console.log(err);
    }
    if(results.length>0){
      console.log('Login successful');
      res.redirect('/src/api/login.js')
    }
    else{
      console.log('Invalid username or password');
    }
  })
  // if (con[0].database[username] === password) {
  //   res.json({ message: 'Login successful' });
  // } else {
  //   res.status(401).json({ message: 'Invalid username or password' });
  // }
});

// Start the server
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});