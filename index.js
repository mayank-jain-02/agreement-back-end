var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');

var app = express();

var routes = require('./routes');

var corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204 
  }

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(cors(corsOptions));

app.use('/', routes);

app.listen(3010, () => {
    console.log('Agreement back-end is up and running at port ', 3010);
})