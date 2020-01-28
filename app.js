// 1 basic requirements set up
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');

// 2 create instance of express and instantiate other dependencies
var app = module.exports = express();
app.use(bodyParser.json());
app.use(cors);




// 3 server to listen
app.listen(3000, ()=>{
    console.log('dtoolz server working');
});