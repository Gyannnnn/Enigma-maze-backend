import { Router } from "express";
import { createUser } from "../controller/user.controller";
const userRouter = Router();

userRouter.get("/dummy",(req,res)=>{
    res.json({
        message:"Hello ..."
    })
})
userRouter.post("/create",createUser)

export default userRouter;