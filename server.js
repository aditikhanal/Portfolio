
var connect = require("connect");

var app = connect().use(connect.static(__dirname + '/src'));

app.listen(8180);