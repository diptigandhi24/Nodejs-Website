// import the http module
var http = require('http');
//handle sending request and returning responses
function handleRequests(req , res){
//return string
	res.end("hello World") ; 
}
// create of server
var server = http.createServer(handleRequests);
// start server and return on port x
server.listen(8080, function(){
	console.log("listening on port 8080")
})