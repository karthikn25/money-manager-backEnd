import { MongoClient } from "mongodb";
import Obj from 'mongodb';
import dotenv from 'dotenv';

dotenv.config()
const Mongo_Url=process.env.Mongo_Url
async function createConnection(){
    const client = new MongoClient(Mongo_Url)
    await client.connect()
    console.log("Mongodb Connected sucessfully")
    return client
}

export var ObjectId = Obj.ObjectId;

export const client = await createConnection();

