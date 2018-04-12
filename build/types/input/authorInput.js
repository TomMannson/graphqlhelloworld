"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var graphql_1 = require("graphql");
exports.default = new graphql_1.GraphQLInputObjectType({
    name: 'AuthorInput',
    fields: function () { return ({
        name: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString) },
        bio: { type: graphql_1.GraphQLString },
        birthday: { type: graphql_1.GraphQLString },
        sex: { type: graphql_1.GraphQLString }
    }); }
});
