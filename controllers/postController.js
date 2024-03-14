import { StatusCodes } from "http-status-codes";
import Post from "../models/Post.js";

export const createPost = async (req, res) => {
  try {
    const newPost = await Post.create({
      email: req.body.email,
      query: req.body.query,
      destination: req.body.destination
    });

    //respond to the client
    return res
      .status(StatusCodes.CREATED)
      .json({ message: "Post created", newPost });
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR);
  }
};
