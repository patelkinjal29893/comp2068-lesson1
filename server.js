/**
 * Created by KINJAL on 1/11/2017.
 */

//reference the http library that ships with node
var http = require('http');

//start an http server asynchronously
http.createServer(function (request, response) {
    //send a response
    response.writeHead(200);
    response.write('<h1>Our first node page</h1>');
    response.end();
}).listen(3000);

//display a message to the console
console.log('server running on port 3000');