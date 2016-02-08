const restify = require('restify');

function respond(req, res, next) {
  res.send('hello ' + req.params.name);
  next();
}

var server = restify.createServer();
server.get('/hello/:test', respond);
server.get('/', respond);

server.listen(8080, function() {
  console.log('%s listing at %s', server.name, server.url);
})