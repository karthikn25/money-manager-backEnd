import express from 'express';
import { AddExpense, GetExpense, RemoveData } from '../Controller/expense.js';


const router = express.Router()

router.post("/add",async(req,res)=>{
    try {
        const data = await AddExpense(req.body)
        if(!data){
            res.status(400).json({message:"data not Added"})
        }
        res.status(200).json({message:"data added sucessfully",data})
    } catch (error) {
        console.log(error)
        res.status(500).json({message:"Internal Server Error"})
    }
})


router.get("/get",async(req,res)=>{
    try {
        const data = await GetExpense(req)
        if(!data){
            res.status(400).json({message:"data not found"})
        }
        res.status(200).json({message:"data found sucessfully",data})
    } catch (error) {
        console.log(error)
        res.status(500).json({message:"Internal Server Error"})
    }
})

router.delete("/delete/:id",async(req,res)=>{
    try {
        const {id} = req.params
        const data = await RemoveData(id)
        if(!data){
            res.status(400).json({message:"data not found"})
        }
        res.status(200).json({message:"data deleted sucessfully",data})
    } catch (error) {
        console.log(error)
        res.status(500).json({message:"Internal Server Error"})
    }
})
export const expenseRouter = router;