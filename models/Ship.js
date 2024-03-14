import { Schema, model } from "mongoose";

// 1. SCHEMA = what does our data look like? Which information will we keep here?
const shipSchema = new Schema({
  id: Number,
  name: String,
  image: String,
  category: String,
  description: String,
  crew: String,
  passengers: Number,
  maxSpeed: String,
});

//2. MODEL = create a model for this schema (we can use to interface with the database)

const Ship = model("ship", shipSchema);

export default Ship;
