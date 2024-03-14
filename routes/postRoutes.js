import express from 'express';


import { createPost } from '../controllers/postController.js';

const router = express.Router();



//=== CREATE ==//
//POST request
//http://localhost:3001/api/teas/create
//Body EXAMPLE:
// {
// 	"name":"Lemon Tea"
// }
//authenticate using body
router.post("/create", createPost);

export default router;