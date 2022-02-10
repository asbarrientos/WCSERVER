var http = require('http');

var server = http.createServer(function(req, res){
    if (req.url == '/') { 

        res.writeHead(200, { 'Content-Type': 'text/html'});

        res.write('<html><body><p>This is home Page.</p></body></html>');
        res.end();
    }

    else if (req.url == "/student"){

        res.writeHead(200, { 'Content-Type': 'text/html'});
        res.write('<html><body><p>This is student Page.</p></body></html>');
        res.end();
    }

    else if (req.url == '/admin') {

        res.writeHead(200, { 'Content-Type': 'text/html'});
        res.write('<html><body><p>This is admin Page.</p></body></html>');
        res.end();
    }

    else
        res.end('Invalid Request!')

    

});

server.listen(2550);
console.log('NodeJS web server at port 2550 is running...')
