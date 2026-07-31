import express, { json } from "express";


const app=express();


// middleware
app.use(express.json());


import ExpenseRouter from "./routes/expense.route.js";

app.use("/api/v1/expenses",ExpenseRouter);

export {app};