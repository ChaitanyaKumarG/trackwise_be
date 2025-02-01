const Student = require("../models/Student");

const StudentController = {
  getAllStudents: (req, res) => {
    Student.getAll((err, result) => {
      if (err) res.json(err);
      else res.json(result);
    });
  },

  getStudentByClass: (req, res) => {
    const { classID } = req.params;
    Student.getByClass(classID, (err, result) => {
      if (err) res.json(err);
      else res.json(result);
    });
  },

  getStudentByPenNo: (req, res) => {
    const { penNo } = req.params;
    Student.getByPenNo(penNo, (err, result) => {
      if (err) res.json(err);
      else res.json(result);
    });
  },

  getStudentByStudentId: (req, res) => {
    const { StudentId } = req.params;
    Student.getByStudentId(StudentId, (err, result) => {
      if (err) res.json(err);
      else res.json(result);
    });
  },

  createStudent: (req, res) => {
    const student = req.body;
    Student.add(student, (err, result) => {
      if (err) res.json(err);
      else res.json({ mgs: "student created", result });
    });
  },
};

module.exports = StudentController