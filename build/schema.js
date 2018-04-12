"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var graphql_1 = require("graphql");
var express_graphql_1 = __importDefault(require("express-graphql"));
var queryType_1 = __importDefault(require("./types/queryType"));
var mutationType_1 = __importDefault(require("./types/mutationType"));
var url = "mongodb://localhost:27017";
function init(db) {
    var schema = new graphql_1.GraphQLSchema({
        query: queryType_1.default,
        mutation: mutationType_1.default
    });
    return express_graphql_1.default({
        schema: schema,
        graphiql: true,
        context: {
            db: db
        }
    });
}
exports.init = init;
