import { QueryResolvers } from "generated/graphql";
import Litable from "../models/litable.js";

export const queries: QueryResolvers =  {
        getAllLitable: ()=>{

            //Fetch Data from MongoDB
            Litable.find().then((data)=>{
                console.log(data)
            });
            
            return {id: "id", city: "Quebec", rent: "2000", imageUrl: ["kjsfjslj"] } 
        },
        user: () => {
            let user = { username: "Parfait", email:"kk"}
            return user;
        },

}
