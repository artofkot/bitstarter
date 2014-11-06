var express = require('express')
var app = express();
var fs=require('fs'); //added important library "fs"

app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))

var buffer = new Buffer(fs.readFileSync("index.html"),"utf-8");

app.get('/', function(request, response) {
  response.send(buffer.toString("utf-8"))
})

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
