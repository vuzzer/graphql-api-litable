import mongoose from "mongoose";
const {Schema} = mongoose;


const litableSchema = new Schema({
    city: String,
    street: String,
    rent: Number,
    createAt:{type: Date, default: Date.now()},
    imageUrl: Array
})  

export default mongoose.model("Litable", litableSchema);  