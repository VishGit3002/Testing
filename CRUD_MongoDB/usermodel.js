import mongoose from "mongoose";

mongoose.connect('mongodb://127.0.0.1:27017/CRUD_practice');

const userSchema = mongoose.Schema({
    name: String,
    username: String,
    email: String
})

export default mongoose.model("user", userSchema); 
