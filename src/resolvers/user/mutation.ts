import {MutationUserResolvers} from "../../generated/graphql.js"

export const mutation: MutationUserResolvers = {
    login: async (_, {user}) =>{
        return {
            id: "test",
            email: "test@gmail.com",
            password: "test",
            username: "test"
        }
    }
}

