import { Schema, model } from "mongoose";

// 1. SCHEMA = what does our data look like? Which information will we keep here?
const planetSchema = new Schema({
  
  id: Number,
  image: String,
  name: String,
  description: String,
  duration: String,
  price: String,
  highlights: String,
  details: String,
  spaceship: String,
  crew: String,
  
});
//2. MODEL = create a model for this schema (we can use to interface with the database)

const Planet = model("planet", planetSchema);

export default Planet;
