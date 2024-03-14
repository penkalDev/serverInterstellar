import { Schema, model } from "mongoose";

// 1. SCHEMA = what does our data look like? Which information will we keep here?
const astronautSchema = new Schema({
  id: Number,
  name: String,
  image: String,
  description: String,
  age: Number,
  ship: String,
  nationality: String,
  experience: Number,
  
});
//2. MODEL = create a model for this schema (we can use to interface with the database)

const Astronaut = model("astronaut", astronautSchema);

export default Astronaut;
