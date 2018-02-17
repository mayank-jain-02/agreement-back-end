var express = require('express');
var bodyParser = require('body-parser');

var app = express();

var routes = require('./routes');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

app.use('/', routes);

app.listen(3010, () => {
    console.log('Agreement back-end is up and running at port ', 3010);
})