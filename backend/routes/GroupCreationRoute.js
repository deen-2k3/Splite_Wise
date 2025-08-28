import express from "express";
import { createGroup ,DeleteGroup,updateGroup} from "../controllers/GroupCreationController.js";

const router = express.Router();

// POST -> Create Group
router.post("/create", createGroup);
router.put("/updateG",updateGroup);
router.delete("DeleteG",DeleteGroup);


export default router;
