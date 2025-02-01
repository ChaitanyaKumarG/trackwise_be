const StudentController = require("../controllers/StudentController");
const express = require('express');
const route = express.Router();

route.get("/", StudentController.getAllStudents)
route.get("/class/:classID", StudentController.getStudentByClass)
route.get("/penNo/:penNo", StudentController.getStudentByPenNo);
route.get("/id/:StudentId", StudentController.getStudentByStudentId);
route.get("/mail/:StudentId", StudentController.getMailByStudentId);
route.post("/", StudentController.createStudent)


module.exports = route