const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const port = process.env.PORT || 5000;

const mysql = require('mysql');

function createConnection() {
  return mysql.createConnection({
     host: "127.0.0.1",
     user: "root",
     password: "0426",
     database: "management",
     port: 3306,
  });
}



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/api/customers' , (req, res) =>{
  let connection;
  connection = createConnection( );
  connection.connect();
  let query = 'Select * from customer';
  connection.query(query, function(error, result){
    if(error) {
      console.log(error);
    }else {
      res.send(result);
    }
  });
  console.log("here");
})



app.listen(port, () => console.log(`Listening on port ${port}`));