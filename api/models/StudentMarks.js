const db = require("../config/db");

const StudentMarks = {

    getByClassAndSubject: (classID, subjectID, callback) => {
        const query = `
         SELECT sm.*, s.StudentName
         FROM studentmarks sm
         INNER JOIN student s ON sm.StudentID = s.StudentID
         WHERE sm.ClassID = ? AND sm.SubjectID = ?;

        `;
        db.query(query, [classID, subjectID], callback);
    },

    getMarksByStudentID: (StudentID, e) => {
        const query =
          "SELECT * FROM studentmarks WHERE StudentID = ? AND IsApproved = TRUE";
        db.query(query, [StudentID], e);
    },


    getAll: (e) => {
        const query = "SELECT * FROM studentmarks";
        db.query(query, e);
    },

    add: (marksData, callback) => {
        const query = `
            INSERT INTO studentmarks (ClassID, StudentID, SubjectID, TestTypeID, DateConducted, MarksObtained, IsApproved)
            VALUES (?, ?, ?, ?, ?, ?, ?)
        `;
        const {
            ClassID,
            StudentID,
            SubjectID,
            TestTypeID,
            DateConducted,
            MarksObtained,
        } = marksData;

        const testTypeIDNum = Number(TestTypeID);
        const IsApproved = testTypeIDNum === 1 ? 1 : 0;

        db.query(
            query,
            [ClassID, StudentID, SubjectID, TestTypeID, DateConducted, MarksObtained, IsApproved],
            callback
        );
    },

    approveMarks: (testTypeID, e)=>{
        const query = "UPDATE studentmarks SET IsApproved = TRUE WHERE TestTypeID = ? AND IsApproved = FALSE"
        db.query(query, [testTypeID], e)
    }
};

module.exports = StudentMarks;
