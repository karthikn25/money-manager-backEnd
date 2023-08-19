import express from 'express';
import { AddIncome, GetIncome, RemoveIncome } from '../Controller/income.js';


const router = express.Router();


//Income Adding

router.post("/add",async(req,res)=>{
    try { 
        const data = await AddIncome(req.body)
        if(!data){
            res.status(400).json({message:"Added data Not found"})
        }
        res.status(200).json({message:"data Added Sucessfully",data})
    } catch (error) {
     console.log(error)
     res.status(500).json({message:"Internal Server Error"})   
    }
})

//Get Income

router.get("/get",async(req,res)=>{
    try {
        const data = await GetIncome(req)
        if(!data){
            res.status(400).json({message:"Added data Not found"})
        }
        res.status(200).json({message:"data Found Sucessfully",data})
    } catch (error) {
        console.log(error)
        res.status(500).json({message:"Internal Server Error"})  
    }
})

//delete Income

router.delete("/remove/:id",async(req,res)=>{
    try {
        const {id} = req.params
        const data = await RemoveIncome(id);
        if(!data){
            res.status(400).json({message:"data Not found"})
        }
        res.status(200).json({message:"data deleted Sucessfully",data})
    } catch (error) {
        console.log(error)
        res.status(500).json({message:"Internal Server Error"})  
    }
})

export const incomeRouter = router;