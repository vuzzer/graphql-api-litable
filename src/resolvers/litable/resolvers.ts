import { mutations } from "./mutation.js";
import { queries } from "./query.js";
import { LitableResolvers, Resolvers } from "../../generated/graphql.js";
import resolversClient from "resolvers/client/resolvers.js";


const resolvers = {
    Query: queries,
    Mutation: mutations,
}


export default  resolvers;