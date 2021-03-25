const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/api/customers' , (req, res) =>{
    res.send([
        {
            'id': 1,
            'image': 'https://placeimg.com/64/64/1',
            'name': 'Elisa Ng',
            'birthday': '210211',
            'gender': 'Fmail',
            'job': 'Students'
          },
          {
            'id': 2,
            'image': 'https://placeimg.com/64/64/2',
            'name': 'James Tommer',
            'birthday': '210221',
            'gender': 'Male',
            'job': 'Programmer'
          },
          {
            'id': 3,
            'image': 'https://placeimg.com/64/64/3',
            'name': 'Skylar Kwon',
            'birthday': '210321',
            'gender': 'Femail',
            'job': 'Doctor'
          }
    ])
});

app.listen(port, () => console.log(`Listening on port ${port}`));