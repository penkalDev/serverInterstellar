import { Schema, model } from "mongoose";

// Define the schema for the "Post" model
const postSchema = new Schema({
    email: {
      type: String,
      required: true,
    },
    query: {
      type: String,
      required: true,
    },
    destination: {
      type: String,
      required: true,
    }
  });
  
  // Create the "Post" model
  const Post = model('post', postSchema);
  
  // Export the model for use in other parts of your application
  export default Post;