import express  from "express";
import { addExpense,getUserBalance,settleBalance, } from "../controllers/ExpenseManagementController.js";

const router=express.Router();

router.post("/addExpense",addExpense);
router.get("/getUSerBalance",getUserBalance);
router.put("/settleBalance",settleBalance);

export default router;