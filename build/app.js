"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var express_1 = __importDefault(require("express"));
var mongodb_1 = require("mongodb");
// import dotenv from 'dotenv';
var schema_1 = require("./schema");
// dotenv.config();
var url = 'mongodb://localhost:27017';
// Database Name
var dbName = 'myproject';
// Use connect method to connect to the Server
mongodb_1.MongoClient.connect(url, function (err, client) {
    console.log("Connected correctly to server");
    var app = express_1.default();
    var db = client.db(dbName);
    app.use('/', schema_1.init(db));
    app.listen(process.env.PORT || 4000);
});
var url = "mongodb://localhost:27017/myproject";
mongoose_1.default.connect(url, {
// promiseLibrary: require('bluebird')
});
