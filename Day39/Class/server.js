const bodyParser = require("body-parser");
const express = require("express");
const mongoose = require("mongoose");

const app = express();

const PORT  = 8000;

app.use(bodyParser.json());

// const DB_URL = "mongodb://localhost:27017/admin";
const DB_URL = "mongodb+srv://sandeepmourian10799:sandeep107@task.qfral9r.mongodb.net/?retryWrites=true&w=majority";

//connect to mongodb
mongoose.connect(DB_URL,{})
.then(()=> console.log('Connected to Mongodb'))
.catch((err)=> console.log("Couldn't run the server", err))

app.post("/mentor" , async(req,res) => {
    try {
        const mentor = new Mentor(req.body);
        await mentor.save();
        res.status(201).send(mentor);
    } catch (error) {
        res.status(400).send(error.message);
    }
});

app.listen(PORT, ()=> {
    console.log("Server is running", PORT);
});