"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var graphql_1 = require("graphql");
var personType_1 = __importDefault(require("./personType"));
exports.default = new graphql_1.GraphQLObjectType({
    name: 'Book',
    fields: function () { return ({
        id: { type: graphql_1.GraphQLID },
        title: { type: graphql_1.GraphQLString },
        shortDescription: { type: graphql_1.GraphQLString },
        description: { type: graphql_1.GraphQLString },
        pages: { type: graphql_1.GraphQLInt },
        isbn: { type: graphql_1.GraphQLString },
        releaseDate: { type: graphql_1.GraphQLString },
        author: { type: personType_1.default }
    }); }
});
