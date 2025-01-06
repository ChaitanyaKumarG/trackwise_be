const express = require("express");
const StudentMarksController = require("../controllers/StudentMarksController");
const router = express.Router();


router.get("/", StudentMarksController.getAllMarks);
router.get("/student/:studentid", StudentMarksController.getMarksByStudentID);
router.get("/:ClassID/:SubjectID", StudentMarksController.getByClassAndSubject);
router.post("/", StudentMarksController.addMarks);
router.post("/approve", StudentMarksController.approveMarksByAdmin);

module.exports = router;