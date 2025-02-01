const db = require("../config/db")

const Students = {
  getAll: (e) => {
    const query = "SELECT * FROM student";
    db.query(query, e);
  },

  getByClass: (cls, e) => {
    const query = "SELECT * FROM student WHERE ClassID = ?";
    db.query(query, [cls], e);
  },

  getByPenNo: (penNo, e) => {
    const query = "SELECT * FROM student WHERE PENNumber = ?";
    db.query(query, [penNo], e);
  },

  getByStudentId: (StudentId, e) => {
    const query = "SELECT * FROM student WHERE StudentID = ?";
    db.query(query, [StudentId], e);
  },

  add: (student, e) => {
    const query = `INSERT INTO student (
    StudentName, 
    FatherName, 
    MotherName, 
    ParentNumber, 
    FatherOccupation, 
    PENNumber, 
    AdmissionNumber, 
    ClassID, Address, DOB, Gender, Photo) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
    const {
      StudentName,
      FatherName,
      MotherName,
      ParentNumber,
      FatherOccupation,
      PENNumber,
      AdmissionNumber,
      ClassID,
      Address,
      DOB,
      Gender,
      Photo,
    } = student;
    db.query(
      query,
      [
        StudentName,
        FatherName,
        MotherName,
        ParentNumber,
        FatherOccupation,
        PENNumber,
        AdmissionNumber,
        ClassID,
        Address,
        DOB,
        Gender,
        Photo,
      ],
      e
    );
  },
};

module.exports = Students