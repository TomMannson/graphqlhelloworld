"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var graphql_1 = require("graphql");
var personType_1 = __importDefault(require("./personType"));
var bookType_1 = __importDefault(require("./bookType"));
var authorInput_1 = __importDefault(require("./input/authorInput"));
var bookInput_1 = __importDefault(require("./input/bookInput"));
var authorsController_1 = require("../resolvers/authorsController");
var booksController_1 = require("../resolvers/booksController");
exports.default = new graphql_1.GraphQLObjectType({
    name: 'Mutation',
    description: 'Root type for mutations',
    fields: {
        addAuthor: {
            type: personType_1.default,
            description: 'Create a new author',
            args: { input: { type: authorInput_1.default } },
            resolve: authorsController_1.addAuthor
        },
        addBook: {
            type: bookType_1.default,
            description: 'Create a new book',
            args: {
                authorId: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLID) },
                input: { type: bookInput_1.default }
            },
            resolve: booksController_1.addBook
        }
    }
});
