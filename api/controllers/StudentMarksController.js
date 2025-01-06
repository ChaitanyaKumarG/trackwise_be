const StudentMarks = require("../models/StudentMarks");

const StudentMarksController = {

  getByClassAndSubject: (req, res) => {
    const { classID, subjectID} = req.params;
    StudentMarks.getByClassAndSubject(
      classID,
      subjectID,
      (err, result) => {
        if (err) res.status(500).json(err);
        else res.json(result);
      }
    );
  },

  getMarksByStudentID: (req, res)=>{
    const {studentid} = req.params
    StudentMarks.getMarksByStudentID(studentid, (err, result)=>{
        if(err) res.json(err)
        else res.json(result) 
    })
  },

    getAllMarks: (req, res)=>{
    StudentMarks.getAll((err, result)=>{
        if(err) res.json(err)
        else res.json(result) 
    })
  },

  addMarks: (req, res) => {
    const marksDataArray = req.body; // Expecting an array of marks
    const promises = marksDataArray.map(
      (marksData) =>
        new Promise((resolve, reject) => {
          StudentMarks.add(marksData, (err, result) => {
            if (err) reject(err);
            else resolve(result);
          });
        })
    );

    Promise.all(promises)
      .then((results) => res.json({ msg: "Marks added successfully", results }))
      .catch((err) => res.status(500).json(err));
  },

  approveMarksByAdmin: (req, res)=>{
    const {testTypeID} = req.body;
    StudentMarks.approveMarks(testTypeID, (err, result)=>{
      if(err) res.json(err)
      else res.json(result)
    })
  }
};

module.exports = StudentMarksController;
