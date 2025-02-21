import { PrismaClient } from "@prisma/client";
import { Request,Response } from "express";
const prisma = new PrismaClient();



export const createUser = async(req:Request,res:Response)=>{
    const {name,branch,registrationnumber} = req.body;
    if(!name || !branch || !registrationnumber|| name.trim()===""||branch.trim()===""||registrationnumber.trim()==="" ){
        res.status(400).json({
            message:"All fields are required"
        });
        return;
    }
    try {
        const users = await prisma.user.create({
            data:{
                name,
                branch, 
                registrationnumber
            }
        });
        if(!users){
            res.status(400).json({
                messge:"Failed to create user"
            })
            return;
        }
        res.status(201).json({
            message:"User created successfully",
            data:users
        })
        
    } catch (error) {
        const err = error as Error;
        res.status(500).json({
            message:err.message
        })
        
    }
   

}