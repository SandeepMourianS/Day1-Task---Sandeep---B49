const bodyParser = require("body-parser");
const express = require("express");
const mongoose = require("mongoose");

const app = express();

const PORT = 8000;

app.use(bodyParser.json());
const Mentor = require("./model/Mentor");
const Student = require("./model/Student");

const DB_URL = "mongodb+srv://sandeepmourian10799:sandeep107@task.qfral9r.mongodb.net/?retryWrites=true&w=majority";

//connect to mongodb
mongoose.connect(DB_URL) 
.then(()=> console.log('Connected to Mongodb'))
.catch((err)=> console.log("Couldn't run the server", err))

//create mentor
app.post("/mentor" , async(req,res) => {
    try {
        const mentor = new Mentor(req.body);
        await mentor.save();
        res.status(201).send(mentor);
    } catch (error) {
        res.status(400).send(error.message);
    }
});
//create student
app.post("/student", async (req, res) => {
    try {
      const student = new Student(req.body);
      await student.save();
      res.status(201).send(student);
    } catch (error) {
      res.status(400).send(error);
    }
});
//API to Assign a student to Mentor
app.post("/mentor/:mentorId/assign", async (req, res) => {
    try {
      const mentor = await Mentor.findById(req.params.mentorId);
      const students = await Student.find({ _id: { $in: req.body.students } });
  
      students.forEach((student) => {
        student.cMentor = mentor._id;
        student.save();
      });
  
      mentor.students = [
        ...mentor.students,
        ...students.map((student) => student._id),
      ];
      await mentor.save();
      res.send(mentor);
    } catch (error) {
      res.status(400).send(error);
    }
});
// API to Assign or Change Mentor for particular Student
app.put("/student/:studentId/assignMentor/:mentorId", async (req, res) => {
    try {
      const mentor = await Mentor.findById(req.params.mentorId);
      const student = await Student.findById(req.params.studentId);
  
      if (student.cMentor) {
        student.pMentor.push(student.cMentor);
      }
  
      student.cMentor = mentor._id;
      await student.save();
      res.send(student);
    } catch (error) {
      res.status(400).send(error);
    }
});
//API to show all students for a particular mentor
app.get("/mentor/:mentorId/students", async (req, res) => {
    try {
      const mentor = await Mentor.findById(req.params.mentorId).populate(
        "students"
      );
      res.send(mentor);
    } catch (error) {
      res.status(400).send(error);
    }
});
//API to show the previously assigned mentor for a particular student.
app.get("/student/:studentId/pMentor", async (req, res) => {
  try {
    const student = await Student.findById(req.params.studentId).populate(
      "pMentor"
    );
    res.send(student);
  } catch (error) {
    res.status(400).send(error);
  }
});

app.listen(PORT, ()=> {
    console.log("Server is running", PORT);
});