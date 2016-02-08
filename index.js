const restify = require('restify');

var port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080;
var ip   = process.env.IP   || process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0';

var server = restify.createServer();

server.get('/hello/:test', function (req, res) {
  res.send('Hello ' + req.params.test);
});

server.get('/', function(req, res) {
  res.send('Hello Origin');
});

server.listen(port, ip, function(){
  console.log('%s listening at %s', server.name, server.url);
});