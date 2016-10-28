var express = require("express");
var app = express();
//Path is part of Node Core now
var path = require("path");
//Pulling in the exampleRoute file, which is the exported Router
var exampleModule = require("./routes/exampleRoute");

app.set("port", (process.env.PORT || 5000));

//Mounting the route, so request that comes in with /example will dip into the
//router module we sourced in called exampleModule.
app.use("/example", exampleModule);

//Catch all route, being used for file serving. Could use .static as well
app.get("/*", function(req,res){
    var file = req.params[0] || "/views/index.html";
    res.sendFile(path.join(__dirname, "/public/", file));
});

app.listen(app.get("port"), function(){
    console.log("Server is running on port: " + app.get("port"));
});

module.exports = app;
