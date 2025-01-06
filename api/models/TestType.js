const db = require("../config/db");


const TestType  = {

    getAll: (callback)=>{
        const query = "SELECT * FROM testtype";
        db.query(query, callback)
    }

}

module.exports = TestType