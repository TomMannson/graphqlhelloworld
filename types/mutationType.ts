import { GraphQLObjectType, GraphQLID, GraphQLNonNull } from 'graphql';
 
import authorType from './personType';
import bookType from './bookType';
import authorInput from './input/authorInput';
import bookInput from './input/bookInput';
 
import { addAuthor } from '../resolvers/authorsController';
import { addBook } from '../resolvers/booksController';
 
export default new GraphQLObjectType({
    name: 'Mutation',
    description: 'Root type for mutations',
    fields: {
        addAuthor: {
            type: authorType,
            description: 'Create a new author',
            args: { input: { type: authorInput } },
            resolve: addAuthor
        },
        addBook: {
            type: bookType,
            description: 'Create a new book',
            args: {
                authorId: {type: new GraphQLNonNull(GraphQLID)},
                input: { type: bookInput }
            },
            resolve: addBook
        }
    }
});