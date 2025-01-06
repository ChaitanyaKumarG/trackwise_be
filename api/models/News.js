const db = require("../config/db");

const News = {

    getAll: (e) => {
        const query = "SELECT * FROM newsupdates";
        db.query(query, e)
    },


    add: (news, e)=> {
        const query = "INSERT INTO newsupdates (Title, Description) VALUES (?, ?)";
        const {Title, Description} = news;
        db.query(query, [Title, Description], e)
    },

}

module.exports = News