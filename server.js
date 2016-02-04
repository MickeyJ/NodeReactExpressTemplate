var express = require('express'),
    http    = require('http'),
    path    = require('path'),
    app     = express();


var port = process.env.PORT || 9000;
app.set('port', port);


var index = require('./routes/index');
app.use('/', index);


var pretty = { beautify: true };
app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine(pretty));


var server = http.createServer(app).listen(port, function(){
  console.log('listening: ' + port);
});