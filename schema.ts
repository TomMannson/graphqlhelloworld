import { GraphQLSchema } from 'graphql'
import graphqlHTTP from 'express-graphql'
import mongodb from 'mongodb'
 
import QueryType from './types/queryType'
import MutationType from './types/mutationType';
 

var url = "mongodb://localhost:27017";
export function init(db: any) {
    const schema = new GraphQLSchema({
        query: QueryType,
        mutation: MutationType
    });
 
    return graphqlHTTP({
        schema: schema,
        graphiql: true,
        context: {
            db: db
        }
    });
}