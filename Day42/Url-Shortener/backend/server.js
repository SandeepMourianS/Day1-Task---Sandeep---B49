const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors');
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const ShortUrl = require('./models/shortUrl')
const Customer = require("./models/Customer");
require("dotenv").config();

const app = express()
app.use(
  cors({
    origin: 'http://localhost:5000',
  })
);
app.use(express.json());
app.use(bodyParser.json());


mongoose.connect('mongodb+srv://sandeepmourian10799:sandeep107@auth.9zcssjn.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true, useUnifiedTopology: true
});

app.use(express.urlencoded({ extended: false }))

app.post("/api/register", async (req, res) => {
  const { username, password } = req.body;

  const hashedPassword = await bcrypt.hash(password, 10);

  const customer = new Customer({ username, password: hashedPassword });

  try {
    await customer.save();
    res.json({ message: "User Registered Successfully!!!" });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "An error occurred while registering the user!" });
  }
});

app.post("/api/login", async (req, res) => {
  const { username, password } = req.body;

  const customer = await Customer.findOne({ username });

  if (!customer) {
    return res
      .status(401)
      .json({ message: "Authentication Failed! User does not exists." });
  }

  const passwordMatch = await bcrypt.compare(password, customer.password);

  if (!passwordMatch) {
    return res
      .status(401)
      .json({ message: "Authentication Failed! Password does not match." });
  }

  const token = jwt.sign(
    { username: customer.username, role: "Mentor" },
    process.env.SECRET_KEY,
    { expiresIn: "1h" }
  );

  res.json({ token });
});

app.get("/api/home", (req, res) => {
  res.json({ message: "Home page accessed successfully!!!" });
});

app.get('/', async (req, res) => {
  const shortUrls = await ShortUrl.find()
  res.send(shortUrls);
});

app.post('/shortUrls', async (req, res) => {
  await ShortUrl.create({ full: req.body.fullUrl })

  res.redirect('/');
});

app.get('/:shortUrl', async (req, res) => {
  const shortUrl = await ShortUrl.findOne({ short: req.params.shortUrl })
  if (shortUrl == null) return res.sendStatus(404)

  shortUrl.clicks++
  shortUrl.save()

  res.redirect(shortUrl.full)
});

app.delete('/:shortUrl', async (req, res) => {
  const shortUrl = await ShortUrl.deleteOne({ short: req.params.shortUrl })
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
