import { mutation } from "./mutation.js";
import { queries } from "./query.js";
import { Resolvers } from "generated/graphql.js";

export const resolvers: Resolvers = {
    Query: queries,
    Mutation: mutation
}
