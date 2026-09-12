import express from "express";
import { createEnquiry, getEnquiries, getEnquiryById, updateEnquiryStatus,deleteEnquiry } from "../controllers/enquiryController.js";

const router = express.Router();

// CREATE
router.post("/", createEnquiry);

// GET ALL
router.get("/", getEnquiries);

// UPDATE
router.put("/:id", updateEnquiryStatus);

// DELETE
router.delete("/:id", deleteEnquiry);

export default router;