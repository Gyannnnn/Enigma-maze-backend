import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
import { Request,Response } from "express";

export const createScore = async(req:Request,res:Response)=>{
    const {score,userId} = req.body;
    if(!score || !userId || userId.trim()===""){
        res.status(400).json({message:"Please provide score and registration number"});
        return;
    }
    const parsedScore = Number(score);
    const parseduserid = Number(userId)
    
    try {
        const Score = await prisma.score.create({
            data:{
                score:parsedScore,
                userId:parseduserid
            }
        })
        if(!score){
            res.status(400).json({
                message: "Error while creating score"
            })
        }
        res.status(200).json({
            message:"Score created successfully",
            data:Score
        })
    } catch (error) {
        const err = error as Error;
        res.status(400).json({
            message: err.message,
        })
        
    }



}





