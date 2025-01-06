const express = require('express')
const route = express.Router();
const ClassControllers = require("../controllers/ClassControllers")

route.get("/", ClassControllers.getAllClasses)


module.exports = route