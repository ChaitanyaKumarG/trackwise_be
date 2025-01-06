const express = require("express");
const route = express.Router();
const AdminControllers = require("../controllers/AdminControllers")


route.get("/", AdminControllers.getallAdmins)



module.exports = route