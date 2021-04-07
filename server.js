const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const port = process.env.PORT || 5000;

const mysql = require('mysql');

const multer = require('multer');
const upload = multer({dest: './upload'})

const connection = createConnection();
connection.connect();

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
   let query = 'Select * from customer';
  connection.query(query, function(error, result){
    if(error) {
      console.log("error here happen", error);
    }else {
      res.send(result);
    }
  });
});

app.use('/image', express.static('./upload'));
app.post('/api/customers', upload.single('image'), (req, res)=>{
  let sql='insert into customer values (null,?,?,?,?,?)';
  let image = '/image/' + req.file.filename;
  let name = req.body.name;
  let birthday = req.body.birthday;
  let gender = req.body.gender;
  let job = req.body.job;

  console.log(image);

  let params = [image, name, birthday, gender, job];
  connection.query(sql, params, (err, rows)=> {
    if(err){
      console.log("err =======", err);
    }else{
      res.send(rows);
    }
  });
});


app.listen(port, () => console.log(`Listening on port ${port}`));