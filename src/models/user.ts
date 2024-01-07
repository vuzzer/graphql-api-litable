import { RoleUser } from "core/role_user";
import mongoose from "mongoose";
const {Schema} = mongoose;

const userSchema = new Schema({
    username: String,
    email: String,
    password: String,
    photo: String,
    role: {type: RoleUser, default: RoleUser.user }
})

export default mongoose.model("User", userSchema);