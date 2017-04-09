var express = require('express');
var jade = require('jade');
var os = require('os');

var app = express();
app.use('/static', express.static('views'));


app.get('/', function (req, res) {
  var html = jade.renderFile('./views/page.jade',{pageTitle: 'Man069', youAreUsingJade: true });
  res.send(html);
});

app.listen(3000, 'localhost',function () {
  console.log('Server started at '+ this.address().address + ':' + this.address().port);
});
