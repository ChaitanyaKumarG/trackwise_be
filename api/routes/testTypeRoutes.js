const express = require('express');
const route = express.Router();
const TestTypeController = require("../controllers/TestTypeController")


route.get("/", TestTypeController.getAllTestTypes)

module.exports = route