import { ObjectId } from 'mongodb';
import { client } from '../db.js';

export function AddIncome(data){
    return client
    .db("guvi")
    .collection("income")
    .insertOne(data)
}


export function GetIncome(req){
 return client
 .db("guvi")
 .collection("income")
 .find(req.params)
 .toArray()
}


export function RemoveIncome(id){
    return client
    .db("guvi")
    .collection("income")
    .findOneAndDelete({_id:new ObjectId(id)})
}


