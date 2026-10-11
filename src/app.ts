
import express, { type Application } from "express";
import cors from "cors";
import { prisma } from "./app/lib/prisma";

const app: Application = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Root route
app.get("/", (_req, res) => {
  res.status(200).json({
    success: true,
    message: "Healthcare Management API is running",
  });
});

// Create specialty
app.post("/specialties", async (_req, res) => {
  try {
    const specialty = await prisma.specialty.create({
      data: {
        title: "Cardiology",
      },
    });

    res.status(201).json({
      success: true,
      message: "Specialty created successfully",
      data: specialty,
    });
  } catch (error) {
    console.error("Create specialty error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to create specialty",
    });
  }
});

// Get all specialties
app.get("/specialties", async (_req, res) => {
  try {
    const specialties = await prisma.specialty.findMany();

    res.status(200).json({
      success: true,
      message: "Specialties retrieved successfully",
      data: specialties,
    });
  } catch (error) {
    console.error("Get specialties error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to retrieve specialties",
    });
  }
});

export default app;
