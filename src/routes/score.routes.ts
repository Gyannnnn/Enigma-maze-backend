import { Router } from "express";
import { createScore } from "../controller/score.controller";
const scoreRouter = Router();



scoreRouter.post("/create",createScore);

export default scoreRouter;