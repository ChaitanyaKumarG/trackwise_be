const express = require("express")
const AttendanceController = require("../controllers/AttendanceController");
const route = express.Router();

route.post("/", AttendanceController.postingAttendance);
route.get("/", AttendanceController.gettingAllAttendance);
route.get("/date/:Date", AttendanceController.gettingAttendanceByDate);
route.get("/class/:Class", AttendanceController.gettingAttendanceByClass)
route.get("/student/:Studentid", AttendanceController.gettingAttendanceByStudentID);

module.exports = route