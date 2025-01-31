const Faculty = require("../models/Faculty");

const FacultyController = {

  getAllFaculties: (req, res) => {
    Faculty.getAll((err, result) => {
      if (err) res.status(500).json({ error: err.message });
      else res.json(result);
    });
  },

  getFacultyByID: (req, res)=>{
    const {facultyID} = req.params
    Faculty.getByID(facultyID, (err, result)=>{
      if(err) res.send(err)
      else res.send(result)
    })
  },

  createFaculty: (req, res) => {
    const newFaculty = req.body;
    Faculty.add(newFaculty, (err, result) => {
      if (err) res.status(500).json({ error: err.message });
      else res.status(201).json({ msg: "New faculty created", result });
    });
  },

  updateFaculty:()=>{
    const {id} = req.params;
    const updatedFaculty = req.body;
    Faculty.update(id, updatedFaculty, (err, result)=>{
      if (err) res.status(500).json({error: err.message})
        else res.json({msg: "Faculty Updated", result})
    })
  },

  deleteFaculty: (req, res) => {
    const { id } = req.params;
    Faculty.delete(id, (err, result) => {
      if (err) res.status(500).json({ error: err.message });
      else res.json({ msg: "Faculty deleted", result });
    });
  },
};

module.exports = FacultyController;
