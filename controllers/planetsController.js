import { StatusCodes } from "http-status-codes";
import Planet from "../models/Planet.js";

export const getAllPlanets = async (req, res) => {
  const planets = await Planet.find();

  //we're sending the list of teas to the client
  return res.status(StatusCodes.OK).json(planets);
};
/**
 * Gets a tea by id
 * @param {*} req
 * @param {*} res
 * @returns
 */
export const getPlanetById = async (req, res) => {
  try {
    //look for the planet in our array that has the :id
    const id = req.params.id;
    const planet = await Planet.findOne({ id: id });

    if (!planet) {
      //when the planet doesn't exist --> send back a 404
      return res.status(StatusCodes.NOT_FOUND).json({ message: "not found" });
    }
    //everything went ok send back the tea we found
    return res.status(StatusCodes.OK).json(planet);
  } catch (error) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: "Error happened", error: error.toString() });
  }
};
