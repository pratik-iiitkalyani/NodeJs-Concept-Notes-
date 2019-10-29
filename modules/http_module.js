const Http = require('http')
const Url = require('url');    // Url Module to Parse the Query String

// Create an Http Server

Http.createServer((req, res)=>{
	res.write("Hi")               // write Response to the client
	res.end()                     // We Must End the Response
}).listen(9000)

// Server with HTTP Header
Http.createServer((req, res)=>{
	res.writeHead(200, {'Content-Type': 'text/html'});
	res.write("Hi! Pratik")           // Response is Displayed as HTML        
	res.end()                   
}).listen(8000)

//--Read the Query String--//
Http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(req.url);
  res.end();
}).listen(8080);

// input-> http://localhost:8080/pratik -> output-> /pratik

// spilt the Query String
Http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  var q = Url.parse(req.url, true).query;
  var txt = q.year + " " + q.month;
  res.end(txt);
}).listen(8080);

// input--> http://localhost:8080/?year=2017&month=July
// OutPut--> 2017 July
