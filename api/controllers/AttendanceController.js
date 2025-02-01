const { sendMail } = require("../config/mail");
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

Your child was marked absent on ${date}. Please check the school portal for details.
If this was an error or you’d like to provide a reason,
kindly update the portal or contact us at [9550557555 - Don't Callme😅].

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
};

module.exports = AttendanceController;
