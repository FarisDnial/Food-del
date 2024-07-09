import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://greatstack:48183642@cluster0.1zxelqc.mongodb.net/food-del')
        .then(() => console.log("DB connected"));
}