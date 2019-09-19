const http = require('http');
const port = 8000;

const server = http.createServer(function(req, res){
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.write('Hello World 9000');
        res.end();
})

server.listen(9000);