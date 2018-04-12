"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var graphql_1 = require("graphql");
var bookType_1 = __importDefault(require("./bookType"));
exports.default = new graphql_1.GraphQLObjectType({
    name: 'PersonType',
    fields: function () { return ({
        _id: { type: graphql_1.GraphQLID },
        name: { type: graphql_1.GraphQLString },
        bio: { type: graphql_1.GraphQLString },
        birthday: { type: graphql_1.GraphQLString },
        sex: { type: graphql_1.GraphQLString },
        books: { type: new graphql_1.GraphQLList(bookType_1.default) },
    }); },
});
