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

module.exports = router;