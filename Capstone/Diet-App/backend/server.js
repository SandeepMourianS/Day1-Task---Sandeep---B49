const express = require('express');
const app = express();
const mongoose = require('mongoose');
const routes = require('./MealRoutes');
const cors = require('cors');

mongoose.set("strictQuery", false);
require('dotenv').config();

app.use(express.json());
app.use(cors());

mongoose
.connect("mongodb+srv://sandeepmourian10799:sandeep107@cluster0.bi7ujnf.mongodb.net/?retryWrites=true&w=majority")
.then(() => console.log("We were connecting to MongoDB"))
.catch((err) => console.log(err))

app.use(routes);


const PORT = 7000 || process.env.port

app.listen(PORT, () => {
    console.log(`I'm listenning on port ${PORT}`)
})