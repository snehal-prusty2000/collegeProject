const express = require("express");
const { testController } = require("../controllers/testController");

//router object(    Riuter Object that we will create only store the functionality of routing in side the variable)
const router = express.Router();

//routes
//router.get("/test1", testController);
router.get("/", testController);

//export
module.exports = router;
