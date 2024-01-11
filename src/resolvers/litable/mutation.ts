import { MutationLitableResolvers } from "../../generated/graphql.js";
import LitableModel from "../../models/litable.js";

export const mutations: MutationLitableResolvers = {
  addLitable: async (_, { input }) => {
    //Create an Litable object
    const litable = new LitableModel({
      city: input.city,
      street: input.street,
      rent: input.rent,
      imageUrl: input.imageUrl,
    });

    try {
      const result = await litable.save();
      return {
        id: result.id,
        street: result.street,
        rent: result.rent,
        city: result.city,
        imageUrl: result.imageUrl,
      };
    } catch (e) {
      console.log(e);
    }
  },

 updateLitable: async(_, {update}) => { 
    // filter parameter
    const filter = {_id: Object(update.id)}
    // fields to update
    const fields = {city: update.city, rent: update.rent, imageUrl: update.imageUrl, street: update.street}
    
    // update litable with ID
    let litableUpdate = await LitableModel.findOneAndUpdate(filter, fields, {new: true})

    return {id: litableUpdate.id, city: litableUpdate.city, rent: litableUpdate.rent, imageUrl: litableUpdate.imageUrl, street: litableUpdate.street}
  },

  deleteLitable: async(_, {id}) => {
    /* const deleted = await LitableModel.findByIdAndDelete({_id:id})
    if(deleted){
        const {value} = deleted 
        return {id: value.id, rent: value.rent, street: value.street, city: value.city, imageUrl: value.imageUrl }
    } */
    return {}
  }

};


