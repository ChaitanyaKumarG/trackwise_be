const Attendance = require("../models/Attendance");

const AttendanceController = {
  postingAttendance: (req, res) => {
    const data = req.body;
    Attendance.postAttendance(data, (err, result) => {
      if (err) res.json(err);
      else res.json(result);
    });
  },

  gettingAttendanceByClass: (req, res) => {
    const { Class } = req.params;
    Attendance.getAttendanceByClass(Class, (err, result) => {
      if (err) res.json(err);
      else res.json(result);
    });
  },

  gettingAttendanceByStudentID: (req, res) => {
    const { Studentid } = req.params;
    Attendance.getAttendanceByStudentID(Studentid, (err, result) => {
      if (err) res.json(err);
      else res.json(result);
    });
  },

  gettingAllAttendance: (req, res) => {
    Attendance.getAllAttendance((err, result) => {
      if (err) res.json(err);
      else res.json(result);
    });
  },

  gettingAttendanceByDate: (req, res) => {
    const { Date } = req.params;
    Attendance.getAttendanceByDate(Date, (err, result) => {
      if (err) res.json(err);
      else res.json(result);
    });
  },

};

module.exports = AttendanceController