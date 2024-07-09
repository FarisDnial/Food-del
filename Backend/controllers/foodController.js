import foodModel from "../models/foodModel.js";
import fs from 'fs';


// add food item
const addFood = async (req, res) => {

    let image_filename = `${req.file.filename}`;

    const food = new foodModel({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        category: req.body.category,
        image: image_filename
    })
    try {
        await food.save(); // to save it in the database
        res.json({ success: true, message: "Food Added" })
    } catch (error) {
        console.logg(error)
        res.json({ success: false, message: "Error" })
    }
}

// all food list
const listFood = async (req, res) => {
    try {
        const foods = await foodModel.find({});
        res.json({ success: true, data: foods })
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" })
    }
}

// remove food item
const removeFood = async (req, res) => {
    try {
        const food = await foodModel.findById(req.body.id); // to find the food Model using id
        fs.unlink(`uploads/${food.image}`, () => { }); // delete the image from the upload folder

        await foodModel.findByIdAndDelete(req.body.id); // delete the data from the database
        res.json({ success: true, message: "Food Removed" });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" })
    }
}

export { addFood, listFood, removeFood }