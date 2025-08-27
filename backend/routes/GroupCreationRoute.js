import express from "express";
import { createGroup } from "../controllers/GroupCreationController.js";

const router = express.Router();

// POST -> Create Group
router.post("/create", createGroup);

export default router;
