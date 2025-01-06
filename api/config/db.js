const mysql = require('mysql2');
require('dotenv').config();

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    dateStrings:true
})

db.connect((err)=>{
    if(err)
        console.log("DB connection err", err);
    else
        console.log("DB connection Successfull");
    
})

module.exports = db