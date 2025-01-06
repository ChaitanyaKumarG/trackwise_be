const db = require("../config/db")

const Subject = {
    getAll: (callback)=>{
        const query = "SELECT * FROM subject";
        db.query(query, callback);
    }
}

module.exports = Subject
