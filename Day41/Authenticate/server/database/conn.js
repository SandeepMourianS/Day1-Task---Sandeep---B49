import mongoose from "mongoose";

import { MongoMemoryServer } from "mongodb-memory-server";
// import ENV from '../config.js'

async function connect(){

    const mongod = await MongoMemoryServer.create();
    // const getUri = mongod.getUri();

    mongoose.set('strictQuery', true)
    // const db = await mongoose.connect(getUri);
    const db = await mongoose.connect("mongodb+srv://sandeepmourian10799:sandeep107@auth.9zcssjn.mongodb.net/?retryWrites=true&w=majority");
    console.log("Database Connected")
    return db;
}

export default connect;