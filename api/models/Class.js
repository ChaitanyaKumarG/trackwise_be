const db = require("../config/db");

const Class = {

    getAll: (callback)=>{
        const query = "SELECT * FROM class";
        db.query(query, callback)
    },

}

module.exports = Class