import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { incomeRouter } from './Router/income.js';
import { expenseRouter } from './Router/expense.js';


dotenv.config()

const app = express();
const PORT=process.env.PORT
app.use(cors());
app.use(express.json());
app.use("/api/income",incomeRouter)
app.use("/api/expense",expenseRouter)
app.listen(PORT,()=>console.log(`localhost running under:${PORT}`))