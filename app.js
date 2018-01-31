var express = require("express");
var path = require("path");

var app = express();
app.use(express.static(path.join(__dirname,"/html")));
app.listen(7777,function(){
  console.log("Started listen on port",7777);
})
