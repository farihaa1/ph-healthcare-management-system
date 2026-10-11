
import express, { type Application } from "express";
import cors from "cors";
import { IndexRoutes } from "./app/routes";

const app: Application = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use("/api/v1",IndexRoutes)
// Root route
app.get("/", (_req, res) => {
  res.status(200).json({
    success: true,
    message: "Healthcare Management API is running",
  });
});


export default app;
