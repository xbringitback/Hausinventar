import mongoose from "mongoose";

const inventorySchema = new mongoose.Schema({
    title: {
        type: String,
    },
    room: {
        type: String,
    },
    image: {
        type: {
            url: String,
            imageId: String
        }
    },
    description: {
        type: String,
    },
    category: {
        type: String,
        enum: ["big", "medium", "small" ]
    }
    
})


export const Inventory = mongoose.model("Inventory", inventorySchema);


