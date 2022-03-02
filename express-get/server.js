// Name: Barrientos, Abigail S
// App Name: server.js
// Description: This program uses GET METHOD and the result shows that it displays the queried string in plain text format.

var express = require('express'); 
var app = express();

app.use(express.static('public'));
app.get('/index.html', function (req, res) {
  res.sendFile(__dirname + "/" + "index.html"); 
})

app.get('/process_get', function (req, res) {
  // Prepare output in JSON format
  response = {
    first_name: req.query.first_name, 
    last_name: req.query.last_name,
    stud_course: req.query.stud_course,
    stud_age: req.query.stud_age,
    stud_comments: req.query.stud_comments
  };
  
  console.log(response);
  res.end(JSON.stringify(response));
})

var server = app.listen(0926, function () {
  var host = server.address().address 
  var port = server.address().port

  console.log("Example app listening at http://%s:%s", host, port);
})