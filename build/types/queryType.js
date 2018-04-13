"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var graphql_1 = require("graphql");
var personType_1 = __importDefault(require("./personType"));
var bookType_1 = __importDefault(require("./bookType"));
var authorsController_1 = require("../resolvers/authorsController");
var booksController_1 = require("../resolvers/booksController");
exports.default = new graphql_1.GraphQLObjectType({
    name: 'Query',
    description: 'Root type for queries',
    fields: {
        authors: {
            type: new graphql_1.GraphQLList(personType_1.default),
            description: 'List of all authors',
            resolve: authorsController_1.getAllAuthors
        },
        author: {
            type: personType_1.default,
            description: 'Get author by ID',
            args: { id: { type: graphql_1.GraphQLID } },
            resolve: authorsController_1.getAuthorById
        },
        book: {
            type: bookType_1.default,
            description: 'Get book by ID',
            args: { id: { type: graphql_1.GraphQLID } },
            resolve: booksController_1.getBookById
        },
        books: {
            type: new graphql_1.GraphQLList(bookType_1.default),
            description: 'List of all books',
            resolve: booksController_1.getAllBooks
            // args: getGraphQLQueryArgs(BookType),
            // resolve: getMongoDbQueryResolver(BookType,
            //     async (filter:any, projection:any, options:any, obj:any, args:any, context: any) => {
            //         return await context.db.collection('books').find(filter, projection, options).toArray();
            // })
        }
    }
});
