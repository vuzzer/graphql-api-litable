import { DataResolvers, MetaDataResolvers, QueryResolvers, Data } from "generated/graphql.js";
import Litable from "../models/litable.js";

export const queries: QueryResolvers =  {
        getAllLitable: async ()=>{
            // Store response data
            let data: Data;

            // Get all litable data
            const litables = await Litable.find();


            // Fetch data and pagination info
            if(litables.length > 0){
                // Get number of documents
                let countDocuments = await Litable.countDocuments()

                // metadata pagination include defaut page, number of items by page and number page
                data.metadata.currentPage =  1

                data.metadata.itemsByPage = 3

                let numberPages = countDocuments / data.metadata.itemsByPage

                numberPages += countDocuments % data.metadata.itemsByPage === 0 ? 0 : 1
             
                data.metadata.numberPage = numberPages
                
                data.litable = litables.map((litable) => {
                    console.log(litable)
                    return {id: litable.id, street: litable.street, rent: litable.rent.toString(), imageUrl: litable.imageUrl, city: litable.city}
                })
            }
            
            return data
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
