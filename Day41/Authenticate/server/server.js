import express from 'express';
import cors from 'cors';
import mongoose from "mongoose";
import morgan from 'morgan';
import router from './router/route.js';

const app = express();

/** middlewares */
app.use(express.json());
app.use(cors());
app.use(morgan('tiny'));
app.disable('x-powered-by'); // less hackers know about our stack

const port = 8080;

const DB_URL = "mongodb+srv://sandeepmourian10799:sandeep107@auth.9zcssjn.mongodb.net/?retryWrites=true&w=majority";
mongoose.set('strictQuery', true);

mongoose.connect(DB_URL) 
.then(()=> console.log('Connected to Mongodb'))
.catch((err)=> console.log("Couldn't run the server", err));

/** HTTP GET Request */
app.get('/', (req, res) => {
    res.status(201).json("Home GET Request");
});

/** api routes */
app.use('/api', router);


/** start server only when we have valid connection */
app.listen(port, () => {
    console.log(`Server connected to http://localhost:${port}`);
});