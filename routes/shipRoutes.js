import express from "express";

import { getAllShips } from "../controllers/shipController.js";

const router = express.Router();

//router.use(logCombination); //make middleware active from here (all router endpoints)

//====READ ===//
//GET list of ships
//http://localhost:3001/api/ships
router.get("/", getAllShips);

export default router;
