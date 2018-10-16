var express = require('express');
var app = express();
var path = require('path');

app.use(express.static(__dirname + '/public'));

var server_port = process.env.OPENSHIFT_NODEJS_PORT || 3000
var server_ip_address = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1'


app.get('/index', function(req, res) {
    res.sendFile(path.join(__dirname + 'public/index.html'));
});

app.listen(server_port, server_ip_address, function () {
  console.log( "Listening on " + server_ip_address + ", port " + server_port )
});