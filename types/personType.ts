
import { GraphQLObjectType, GraphQLList, GraphQLString, GraphQLNonNull, GraphQLInt, GraphQLID } from 'graphql';
import bookType from './bookType'


export default new GraphQLObjectType({
    name: 'PersonType',
    fields: ():any => ({
        _id: {type: GraphQLID},
        name: {type: GraphQLString},
        bio: {type: GraphQLString},
        birthday: {type: GraphQLString},
        sex: {type: GraphQLString},
        books: {type: new GraphQLList(bookType)},
    }),
})