import { ObjectId } from "mongodb";
import { client } from "../db.js";




export function AddExpense(data){
  return client
  .db("guvi")
  .collection("expense")
  .insertOne(data)
}

export function GetExpense(req){
    return client
    .db("guvi")
    .collection("expense")
    .find(req.params)
    .toArray()
}

export function RemoveData(id){
return client
.db("guvi")
.collection("expense")
.findOneAndDelete({_id:new ObjectId(id)})
}