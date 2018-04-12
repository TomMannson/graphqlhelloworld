import { GraphQLObjectType, GraphQLObjectTypeConfig,  GraphQLList, GraphQLString, GraphQLNonNull, GraphQLInt, GraphQLID } from 'graphql';
import { getGraphQLQueryArgs, getMongoDbQueryResolver } from 'graphql-to-mongodb'


import PersonType from './personType'
import BookType from './bookType'
import {getAllAuthors, getAuthorById} from '../resolvers/authorsController'
import {getBookById, getAllBooks} from '../resolvers/booksController'

export default new GraphQLObjectType({
    name: 'Query',
    description: 'Root type for queries',
    fields: {
        authors: {
            type: new GraphQLList(PersonType),
            description: 'List of all authors',
            resolve: getAllAuthors
            // args: getGraphQLQueryArgs(PersonType),
            // resolve: getMongoDbQueryResolver(PersonType,
            //     async (filter:any, projection:any, options:any, obj:any, args:any, context: any) => {
            //         return await context.db.collection('authors').find(filter, projection, options).toArray();
            // })
        },
        author: {
            type: PersonType,
            description: 'Get author by ID',
            args: { id: { type: GraphQLID } },
            resolve: getAuthorById
        },
        book: {
            type: BookType,
            description: 'Get book by ID',
            args: { id: { type: GraphQLID } },
            resolve: getBookById
        },
        books: {
            type: new GraphQLList(BookType),
            description: 'List of all books',
            resolve: getAllBooks
            // args: getGraphQLQueryArgs(BookType),
            // resolve: getMongoDbQueryResolver(BookType,
            //     async (filter:any, projection:any, options:any, obj:any, args:any, context: any) => {
            //         return await context.db.collection('books').find(filter, projection, options).toArray();
            // })
        }
    }
}) ;