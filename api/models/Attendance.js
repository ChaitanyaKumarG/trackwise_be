const db = require("../config/db")
const Student = require("./Student")

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

  getAllAttendance: (e) => {
    const query = "SELECT * FROM attendance";
    db.query(query, e);
  },

  getAbsentStudents:(date, e)=>{
    const query = "SELECT a.StudentID FROM attendance a WHERE a.Attendance = 0 AND a.Date = ?";
    db.query(query, [date], (err, result)=>{
      if(err) return e(err);
      if(result.length === 0) return e(null, []);

      let emails = [];
      let completedRequests = 0;

      result.forEach((row)=>{
        Student.getmailbystudentId(row.StudentID, (err, studentResult) => {
          completedRequests++;
          if(err) {
            return e(err);
          }
          if (studentResult && studentResult.length > 0) {
            emails.push(studentResult[0].Email);
          }
          if (completedRequests === result.length){
            e(null, emails)
          }
        })
      })
    })
  },

  getAttendanceByDate: (Date, e) => {
    const query = "SELECT * FROM attendance WHERE Date = ?";
    db.query(query, [Date], e);
  },

};

module.exports = Attendance