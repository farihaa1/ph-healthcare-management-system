/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from "express";
import { SpecialtyService } from "./specialty.service";

const createSpecialty = async (req: Request, res: Response) => {
  try {
    const payload = req.body;

    const result = await SpecialtyService.createSpecialty(payload);

    res.status(201).json({
      success: true,
      message: "Specialty created successfully",
      data: result,
    });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    res.status(500).json({
      success: true,
      message: "Specialty created successfully",
      error: err.message,
    });
  }
};

const getAllSpecialties = async (req: Request, res: Response) => {
  try {
    const specialties = await SpecialtyService.getAllSpecialties();

    res.status(200).json({
      success: true,
      message: "Specialties fetched successfully",
      data: specialties,
    });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    res.status(500).json({
      success: true,
      message: "failed to fetch specialties",
      error: error.message,
    });
  }
};

const deleteSpecialty = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await SpecialtyService.deleteSpecialty(id as string);

    res.status(200).json({
      success: true,
      message: "Specialty deleted successfully",
      data: result,
    });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "failed to fetch specialties",
      error: error.message,
    });
  }
};

const updateSpecialty = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await SpecialtyService.updateSpecialty(
      id as string,
      req.body,
    );

    res.status(200).json({
      success: true,
      message: "updated successfully",
      data: result,
    });
  } catch (error: any) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "failed to update",
      error: error.message,
    });
  }
};
export const specialtyController = {
  createSpecialty,
  getAllSpecialties,
  deleteSpecialty,
  updateSpecialty,
};
