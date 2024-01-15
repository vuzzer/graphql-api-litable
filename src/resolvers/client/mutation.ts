import { RoleUser } from "core/role_user.js"
import {MutationResolvers} from "../../generated/graphql.js"
import clientModel from "../../models/client.js"

const mutation = {
    login: async (_, {user}) =>{
        // create client model
        const client = new clientModel({
            role: RoleUser.user,
            id: "test",
            email: "test@gmail.com",
            password: "test",
            username: "test",
        })

        // persist data
        await client.save();

        return {
            id: "test",
            email: "test@gmail.com",
            password: "test",
            username: "test",
        }
    }
}

export default mutation;

