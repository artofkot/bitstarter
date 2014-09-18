var express = require('express')
var app = express();

app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))

var buffer = new Buffer(fs.readFile("index.html"),"utf-8");

app.get('/', function(request, response) {
  response.send(buffer.toString("utf-8", 0, 12))
})

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
