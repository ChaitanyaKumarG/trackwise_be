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
    const {Class} = req.params;
    Attendance.getAttendanceByClass(Class, (err, result) => {
      if (err) res.json(err);
      else res.json(result);
    });
  },

  gettingAttendanceByStudentID: (req, res) => {
    const {Studentid} = req.params;
    Attendance.getAttendanceByStudentID(Studentid, (err, result) => {
      if (err) res.json(err);
      else res.json(result);
    });
  },
<<<<<<< HEAD

  gettingAllAttendance: (req, res) => {
    Attendance.getAllAttendance((err, result) => {
      if (err) res.json(err);
      else res.json(result);
    });
  },

  sendAbsenceEmails: (req, res) => {
    const { date } = req.body;
    Attendance.getAbsentStudents(date, (err, emails) => {
      if (err) {
        return res.status(500).json({ error: "Error fetching absentees." });
      }

      if (emails.length === 0) {
        return res
          .status(200)
          .json({ message: "No absentees for the given date." });
      }

      // Loop through emails and send notifications
      emails.forEach((email) => {
        email = email.trim().normalize("NFKC"); // Normalize the email
        const emailBody = `Dear Parent,

This is an automated notification from [*School Name*]. Your child was absent on ${date}.

If this absence was recorded in error or if you wish to provide a reason,
please update the school portal or contact the administration at [ +91 95505 57555 {dont call me😅} ].

**This is a system-generated email. Please do not reply directly to this message.**

Best regards,
[School Name]`;
        sendMail(email, `Attendance Alert: Absence on ${date}`, emailBody)
          .then(() => {
            console.log(`Email sent to: ${email}`);
          })
          .catch((err) => {
            console.error(`Error sending email to ${email}:`, err);
          });
      });

      res.status(200).json({ message: "Emails sent successfully." });
    });
  },

  gettingAttendanceByDate: (req, res) => {
    const { Date } = req.params;
    Attendance.getAttendanceByDate(Date, (err, result) => {
      if (err) res.json(err);
      else res.json(result);
    });
  },
=======
>>>>>>> 8d91e4d7c3199d0f2ef5c107f8bd5f841b2be378
};

module.exports = AttendanceController