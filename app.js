// 1 basic requirements set up
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var useragent = require('express-useragent');
// 2 create instance of express and instantiate other dependencies
var app = module.exports = express();
app.use(bodyParser.json());
app.use(cors());
app.use(useragent.express());
//url for api
var api = '/api/whoami';

app.get(api, (req,res,next)=>{
  var theLanguage = req.acceptsLanguages();
  var theSoftware = "Operating System: " + req.useragent.os + ", User Browser:" + req.useragent.browser; // get('User-Agent');
  var theIpAddress = req.ip;

  res.json({'theIpAddress': theIpAddress, 'theLanguage': theLanguage[0],'theSoftware': theSoftware});
  
    // console.log('get request working');
});


// 3 server to listen
app.listen(3000, ()=>{
    console.log('dtoolz server working');
});