import { MutationResolvers } from "generated/graphql";
import LitableModel from "../models/litable.js";

export const mutation: MutationResolvers = {
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
        rent: result.rent.toString(),
        city: result.city,
        imageUrl: result.imageUrl,
      };
    } catch (e) {
      console.log(e);
    }
  },

/*   updateLitable: async(_, {update}) => {
    // filter parameter
    const filter = {_id: Object(update.id)}
    // fields to update
    const fields = update.filter((field) => field !== undefined)
  } */
};


