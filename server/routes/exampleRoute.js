var express = require("express");
var router = express.Router();

router.get("/cat", function(req,res){
    res.send("meow");
});

router.get("/*", function(req,res){
    res.send("matched route file wildcard");
});

module.exports = router;
