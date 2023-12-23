import { QueryResolvers } from "generated/graphql.js";
import Litable from "../models/litable.js";

export const queries: QueryResolvers =  {
        getAllLitable: async ()=>{
            // Store all litable data
            const litables = await Litable.find();

            // List of Litable to return
            let response = []

            if(litables.length > 0){
                response = litables.map((litable) => {
                    return {id: litable.id, street: litable.street, rent: litable.rent.toString(), imageUrl: litable.imageUrl, city: litable.city}
                })
                return response
            }
            return response
        },
        user: () => {
            let user = { username: "Parfait", email:"kk"}
            return user;
        },
        getLitableById: async (_, content) => {
            const data = await Litable.findById({_id: Object(content.id)})
            
            // Store response data to return
            let litable = {}

            // If litable exist, assign value to litable variable
            if(data){
                litable = {id: data.id, street: data.street, rent: data.rent.toString(), imageUrl: data.imageUrl, city: data.city}
            }
            return litable
        }
}
