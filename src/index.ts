require('dotenv').config()
import express from 'express';
import cors from 'cors';
import userRouter from './routes/user.routes';
import scoreRouter from './routes/score.routes';
const app = express();

app.use(cors());
app.use(express.json());



app.get("/",(req,res)=>{
    res.json({
        message:"Welcome to maze backend",
        version:"1.0.0",
        author:"Rocket",
    })
});


app.use("/api/v1/user",userRouter);
app.use("/api/v1/score",scoreRouter)


app.listen(process.env.PORT || 3001,()=>{
    console.log(`Server is running at http://localhost:${process.env.PORT || 3001}`)
})