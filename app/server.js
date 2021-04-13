var express = require('express');
var app = express();app.use(express.static("portfolio/src" + '/'));app.listen(process.env.PORT || 8080);