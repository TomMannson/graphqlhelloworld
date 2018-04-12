
import mongoose from 'mongoose';
import express from 'express';
import {MongoClient} from 'mongodb'
// import dotenv from 'dotenv';
 
import {init as initGraphQLSchema} from './schema';
 
// dotenv.config();
 
var url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'myproject';

// Use connect method to connect to the Server
MongoClient.connect(url, function(err, client) {
    console.log("Connected correctly to server");
 
    const app = express();
    const db = client.db(dbName);


    app.use('/', initGraphQLSchema(db));
    
    app.listen(process.env.PORT || 4000);


  
});


var url = "mongodb://localhost:27017/myproject";
mongoose.connect(url,  {
    // promiseLibrary: require('bluebird')
});
