const express = require("express");
const app = express();
const port = process.env.PORT || 1321;
const cors = require("cors");
const morgan = require("morgan");
const bodyParser = require("body-parser");

//Middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(bodyParser.json());




//Routes
const newsRoutes = require("./api/routes/newsRoutes");
app.use("/news", newsRoutes);

const facultyRoutes = require("./api/routes/facultyRoutes");
app.use("/faculty", facultyRoutes);

const adminRoutes = require("./api/routes/adminRoutes");
app.use("/admin", adminRoutes);

const classRoutes = require("./api/routes/classRoutes");
app.use("/class", classRoutes);

const subjectRoutes = require("./api/routes/subjectRoutes");
app.use("/subject", subjectRoutes);

const studentRoutes = require("./api/routes/studentRoutes");
app.use("/student", studentRoutes)

const studentMarksRoutes = require("./api/routes/studentMarksRoutes");
app.use("/studentmarks", studentMarksRoutes);

const testTypeRoutes = require("./api/routes/testTypeRoutes");
app.use("/testtype", testTypeRoutes)

const attendanceRoute = require("./api/routes/AttendanceRoutes");
app.use("/attendance", attendanceRoute)




app.get("/", (req, res) => {
    res.send("Server running");
});

app.listen(port, () => {
    console.log(`server started running at port ${port}`);
});
