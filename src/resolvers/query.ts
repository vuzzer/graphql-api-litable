import { QueryResolvers } from "generated/graphql.js";
import Litable from "../models/litable.js";

export const queries: QueryResolvers =  {
        getAllLitable: async ()=>{
            const data = await Litable.find();
            if(data.length > 0){
                let litables = data.map((litable) => {
                    return {id: litable.id, street: litable.street, rent: litable.rent.toString(), imageUrl: litable.imageUrl, city: litable.city}
                })
                return litables
            }
            return []
        },
        user: () => {
            let user = { username: "Parfait", email:"kk"}
            return user;
        }
}
