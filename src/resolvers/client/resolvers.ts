import { Resolvers, UserResolvers } from "../../generated/graphql.js";
import mutation from "./mutation";



const resolvers = {
    Mutation: mutation    
}

export default resolvers;