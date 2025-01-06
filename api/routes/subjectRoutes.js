const express = require('express');
const route = express.Router();
const SubjectControllers = require("../controllers/SubjectControllers");

route.get("/", SubjectControllers.getAllSubjects)

module.exports = route