import {expenses} from '../data/expenses.js';



const getExpenses=(req,res)=>{
    res.status(200).json(expenses);
}



const addExpenses=(req,res)=>{
    const {title,amount,category}=req.body;

    if(!title || !amount || !category)
        return res.status(400).json(
            {
                message:"some field is missing"
            }
        )
    
    expenses.push(
        {
            id:expenses.length>0?expenses[expenses.length-1].id+1:1,
            title,
            amount,
            date:new Date().toDateString(),
            category
        }
    )
    res.status(201).json(
        {
            message:"New expense added successfully",
            expenses
        }
    );
}



const getCateogryExpense=(req,res)=>{
    const {category}=req.params;

    const filterCategory=expenses.filter(ex=>ex.category.toLowerCase()===category.toLowerCase())

    res.status(200).json(
        {
            message:`filter ${category} category expenses`,
            filterCategory
        }
    )
}


const getTotalExpense=(req,res)=>{
    const total=expenses.reduce((sum,expense)=>sum+expense.amount,0);

    res.status(200).json(
        {
            message:"fetch total expenses successfully",
            total
        }
    )
}


const getCatTotalExpense=(req,res)=>{
    const {category}=req.params;

    const catTotal=expenses.filter(exp=>exp.category.toLowerCase()===category.toLowerCase()).reduce((sum,expense)=>sum+expense.amount,0);

    res.status(200).json(
        {
            message:`fetch ${category} category total expenses`,
            catTotal
        }
    )
}


const deletetingExpense=(req,res)=>{
    const id=req.params.id;

    const idx=expenses.findIndex(e=>e.id===id);

    expenses.splice(idx,1);

    res.status(200).json(
        {
            message:`Expense id ${id} deleted successfully`,
            expenses
        }
    )
}


export {getExpenses,addExpenses,deletetingExpense,getCatTotalExpense,getTotalExpense,getCateogryExpense}