// ===============================================================================
// API ROUTING
// ===============================================================================

const express = require("express");
const path = require("path");

const empData = require("../data/employees");

const router = express.Router();

router.get("/api/employees", function(req, res){
    res.json(empData);
});

router.post("/api/employees", function(req, res){
//Collect survey answers provided by user in an array 
 let ans = req.body.scores;
//Logic to find the most compatible employee
let result = [];
// Loop the data array
for(let i = 0; i < empData.length; i++){
 let diff = 0;
//  Loop the scores array for per object in full data array
 for(let j = 0; j < 10; j++){
  diff += Math.abs(parseInt(empData[i].scores[j]) -  parseInt(ans[j]));
 };
 result.push(diff);
};
// Get the index of the most compatible employee
let a = result.indexOf(Math.min.apply(null,result));
// res.json(result);
// res.json(a);
res.json({name: empData[a].name,
          photo: empData[a].photo,
          result: result,
          index: a
});

});

module.exports = router;