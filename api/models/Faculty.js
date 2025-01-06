const db = require("../config/db");
const mysql = require("mysql2");


const Faculty = {

    getAll: (e)=>{
        const query = "SELECT * FROM faculty";
        db.query(query, e)
    },

    getByID: (FacultyID, e)=>{
        const query = "SELECT * FROM faculty WHERE FacultyID = ?";
        db.query(query, [FacultyID], e)
    },

    add: (Faculty, e)=>{
        const query = "INSERT INTO faculty (Name, PhNo, Email, FacultyKey, Password) VALUES (?, ?, ?, ?, ?)";
        const {Name, PhNo, Email, FacultyKey, Password} = Faculty;
        db.query(query, [Name, PhNo, Email, FacultyKey, Password], e)
    },

    delete: (id, e)=>{
        const query = "DELETE FROM faculty WHERE FacultyID = ?";
        db.query(query, [id], e)
    }

}

module.exports = Faculty