import { StatusCodes } from "http-status-codes";
import Ship from "../models/Ship.js";


export const getAllShips = async (req, res) => {
    const ships = await Ship.find();
  
    //we're sending the list of teas to the client
    return res.status(StatusCodes.OK).json(ships);
  };