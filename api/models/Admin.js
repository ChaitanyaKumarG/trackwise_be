const db = require("../config/db");
const mysql = require('mysql2')


const Admin = {

    getAll: (e)=>{
        const query = "SELECT * FROM admin";
        db.query(query, e)
    }

}

module.exports = Admin