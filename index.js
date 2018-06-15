var express = require('express');
var app = express();

app.use('/', express.static(__dirname + '/www'));
app.use('/dist', express.static(__dirname + '/dist'));

app.listen(80, function () {
    console.log('Example app listening on port 80!');
});
