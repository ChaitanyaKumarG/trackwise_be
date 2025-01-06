const Class = require("../models/Class");

const ClassControllers = {

    getAllClasses: (req, res)=>{
        Class.getAll((err, result)=>{
            if(err) res.json(err)
            else res.json(result)
        })
    }

}

module.exports = ClassControllers