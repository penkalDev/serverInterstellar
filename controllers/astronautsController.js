import { StatusCodes } from "http-status-codes";
import Astronaut from "../models/Astronaut.js";


export const getAllAstronauts = async (req, res) => {
    const astronauts = await Astronaut.find();
  
    //we're sending the list of teas to the client
    return res.status(StatusCodes.OK).json(astronauts);
  };
  