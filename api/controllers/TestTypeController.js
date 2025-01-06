const TestType = require("../models/TestType");

const TestTypeController = {

    getAllTestTypes: (req, res)=>{
        TestType.getAll((err, result)=>{
            if (err) res.json(err)
            else res.json(result)
        })
    }

}

module.exports = TestTypeController