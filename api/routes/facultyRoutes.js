const express = require('express');
const route = express.Router();
const FacultyController = require("../controllers/FacultyControllers")


// Route to get all faculties
route.get("/", FacultyController.getAllFaculties);

// Route to get faculty by ID
route.get("/:facultyID", FacultyController.getFacultyByID);

// Route to create a new faculty
route.post("/", FacultyController.createFaculty);

// Route to delete a faculty by ID
route.delete("/:id", FacultyController.deleteFaculty);

// Route to update Faculty by ID
route.put("/:id", FacultyController.updateFaculty);

module.exports = route