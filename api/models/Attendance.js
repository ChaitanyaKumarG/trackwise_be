const db = require("../config/db")

const Attendance = {
  postAttendance: (data, e) => {
    const query =
      "INSERT INTO attendance (ClassID, StudentID, Attendance) VALUES (?, ?, ?)";

    const { ClassID, StudentID, Attendance } = data;
    db.query(query, [ClassID, StudentID, Attendance], e);
  },

  getAttendanceByClass: (Class, e) => {
    const query = "SELECT * FROM attendance WHERE ClassID = ?";
    db.query(query, [Class], e);
  },

  getAttendanceByStudentID: (Studentid, e) => {
    const query = "SELECT * FROM attendance WHERE StudentID = ?";
    db.query(query, [Studentid], e);
  },
};

module.exports = Attendance