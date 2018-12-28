//library imports
var express = require('express');
var bodyparser = require('body-parser');


//local imports
var {mongoose} = require('./db/mongoose');
var {Todo}= require('./models/todo');
var {Todo}= require('./models/user');


var app = express();

app.use(bodyparser.json());


app.post('/todos', (req,res) => {
  var todo = new Todo({
    text: req.body.text
  });

  todo.save().then((doc) => {
    res.send(doc);
  }, (e) => {
    res.status(400).send(e);
  });
});



app.listen(3000, () => {
  console.log('Started on port 3000');
});