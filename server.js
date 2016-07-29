var express = require('express');

// Create our app
var app = express();

app.use(express.static('public'));

app.listen(4900, function () {
  console.log('Express server is up on port 4900');
});
