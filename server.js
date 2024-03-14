import mongoose from "mongoose";
import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import planetRoutes from "./routes/planetRoutes.js";
import astronautRoutes from "./routes/astronautRoutes.js";
import shipRoutes from "./routes/shipRoutes.js";
import postRoutes from "./routes/postRoutes.js";

dotenv.config();
// Middleware
const app = express();
app.use(cors());

app.use(express.json());
// Database connection
mongoose
  .connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}/${process.env.DB_NAME}`
  )
  .then(() => {
    console.log("Database connected! 😃");
  })
  .catch((error) => {
    console.log(error.message);
    console.log("🤨");
  });
  //http://localhost:3001/api/planets

// Routes
app.use("/api/planets", planetRoutes);
app.use("/api/astronauts", astronautRoutes);
app.use("/api/ships", shipRoutes);
app.use("/api/posts",postRoutes);

// Server instance


app.listen(3001, () => {
  console.log("Server is listening....");
});
