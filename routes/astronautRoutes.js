import express from 'express';


import { getAllAstronauts } from "../controllers/astronautsController.js";

const router = express.Router();

//router.use(logCombination); //make middleware active from here (all router endpoints)

//====READ ===//
//GET list of teas
//http://localhost:3001/api/teas
router.get("/", getAllAstronauts);

export default router;