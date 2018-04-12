"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var graphql_1 = require("graphql");
exports.default = new graphql_1.GraphQLInputObjectType({
    name: 'BookInput',
    fields: function () { return ({
        title: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString) },
        shortDescription: { type: graphql_1.GraphQLString },
        description: { type: graphql_1.GraphQLString },
        pages: { type: graphql_1.GraphQLInt },
        isbn: { type: graphql_1.GraphQLString },
        releaseDate: { type: graphql_1.GraphQLString }
    }); }
});
