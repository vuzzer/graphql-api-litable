import { queries } from "./query.js";
import { Resolvers } from "generated/graphql.js";

export const resolvers: Resolvers = {
    Query: queries
}
