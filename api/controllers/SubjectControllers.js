const Subject = require("../models/Subject");

const SubjectControllers ={
    getAllSubjects: (req, res)=>{
        Subject.getAll((err, result)=>{
            if(err) res.json(err)
            else res.json(result)
        })
    }
}

module.exports = SubjectControllers