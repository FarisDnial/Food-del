import mongoose from "mongoose";

const foodSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: String, required: true },
    category: { type: String, required: true },
})

const foodModel = mongoose.Model.food || mongoose.model("food", foodSchema) // to avoid creating more model, if the model is exist then it will be used, if not then the model will be created 

export default foodModel;