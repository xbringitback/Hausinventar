import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    image: {
        type: {
            url: String,
            imageId: String
        }
    },
    description: {
        type: String
    }   
})


export const UserProfile = mongoose.model("UserProfile", userSchema);


