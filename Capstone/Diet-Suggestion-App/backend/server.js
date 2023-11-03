const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cors = require("cors");
const User = require("./model/User");
require("dotenv").config();

const app = express();

const corsOptions = {
    origin: 'http://localhost:5173',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  };

app.use(cors(corsOptions));

app.use(bodyParser.json());

const DB_URL = "mongodb+srv://sandeepmourian10799:sandeep107@cluster0.bi7ujnf.mongodb.net/?retryWrites=true&w=majority";

//mongodb connection
mongoose
  .connect(DB_URL, {})
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log("Could not connect to MongoDB", err));

app.get('/', (req, res) => {
    res.status(201).json("Home GET Request");
});

//api for register
app.post("/api/register", async (req, res) => {
    const { username, email, password } = req.body;
  
    const hashedPassword = await bcrypt.hash(password, 10);
  
    const user = new User({ username, email, password: hashedPassword });
  
    try {
      await user.save();
      res.json({ message: "User Registered Successfully!!!" });
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .json({ message: "An error occurred while registering the user!" });
    }
});

//api for login
app.post("/api/login", async (req, res) => {
    const { username, password } = req.body;
  
    const user = await User.findOne({ username });
  
    if (!user) {
      return res
        .status(alert("User not found"))
        .json({ message: "Authentication Failed! User does not exists." });
    }
  
    const passwordMatch = await bcrypt.compare(password, user.password);
  
    if (!passwordMatch) {
      alert("Password incorrect")
      return res
        .status(401)
        .json({ message: "Authentication Failed! Password does not match." });
    }
  
    const token = jwt.sign(
      { username: user.username, role: "Mentor" },
      process.env.SECRET_KEY,
      { expiresIn: "1h" }
    );
  
    res.json({ token });
  });

const PORT = 4000;

app.listen(PORT, () => {
    console.log("Server is running on PORT", PORT);
});