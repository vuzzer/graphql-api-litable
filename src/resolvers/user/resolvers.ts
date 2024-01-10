import { Resolvers, UserResolvers } from "../../generated/graphql.js";
import { mutation } from "./mutation";

export const resolvers: Resolvers<UserResolvers> = {
    MutationUser: mutation
}