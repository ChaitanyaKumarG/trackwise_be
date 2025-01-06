const express = require('express')
const NewsControllers = require("../controllers/NewsControllers")

const route = express.Router();


route.get("/", NewsControllers.getAllNews)
route.post("/", NewsControllers.addNews)


module.exports = route;