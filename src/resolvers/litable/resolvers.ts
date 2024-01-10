import { mutations } from "./mutation.js";
import { queries } from "./query.js";
import { LitableResolvers, Resolvers } from "../../generated/graphql.js";

export const resolvers: Resolvers<LitableResolvers> = {
    Query: queries,
    MutationLitable: mutations
}
