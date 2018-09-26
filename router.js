var express = require('express');
var router = express.Router();
var stravaAccess = require("./StravaAccess.js");
var s = new stravaAccess();
router.get("/",function (req,res){
   
    
    s.getAthlete(req, res);
});


router.get("/activities",function (req,res){
   
    s.getActivities(req, res);
});

module.exports = router;


