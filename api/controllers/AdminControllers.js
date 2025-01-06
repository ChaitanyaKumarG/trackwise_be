const Admin = require("../models/Admin");

const AdminControllers = {

    getallAdmins: (req, res)=>{
        Admin.getAll((err, result)=>{
            if(err) res.json(err)
            else res.json(result)
        })
    }

}

module.exports = AdminControllers