import express from 'express';


import { getAllPlanets, getPlanetById } from "../controllers/planetsController.js";

const router = express.Router();

//router.use(logCombination); //make middleware active from here (all router endpoints)

//====READ ===//
//GET list of planets
//http://localhost:3001/api/planets
router.get("/", getAllPlanets);

//====READ ===//
//GET planet by id
//http://localhost:3001/api/planets/:id

router.get("/:id", getPlanetById);

export default router;