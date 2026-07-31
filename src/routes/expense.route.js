import { Router } from "express";
import { addExpenses, deletetingExpense, getCateogryExpense, getCatTotalExpense, getExpenses, getTotalExpense } from "../controllers/expense.controller.js";


const router=Router();


router.route("/").get(getExpenses).post(addExpenses);

router.route("/:id").delete(deletetingExpense);

router.route("/category/:category").get(getCateogryExpense);

router.route("/total").get(getTotalExpense);

router.route("/total/:category").get(getCatTotalExpense);


export default router;