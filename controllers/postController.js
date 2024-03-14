import { StatusCodes } from "http-status-codes";
import Post from "../models/Post.js";

export const createPost = async (req, res) => {
  try {
    const { email, query, destination } = req.body;
    const newPost = await Post.create({
      email: email,
      query: query,
      destination: destination
    });

    //respond to the client
    return res
      .status(StatusCodes.CREATED)
      .json({ message: "Post created", newPost });
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR);
  }
};
