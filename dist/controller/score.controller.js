"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createScore = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const createScore = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { score, userId } = req.body;
    if (!score || !userId || userId.trim() === "") {
        res.status(400).json({ message: "Please provide score and registration number" });
        return;
    }
    const parsedScore = Number(score);
    const parseduserid = Number(userId);
    try {
        const Score = yield prisma.score.create({
            data: {
                score: parsedScore,
                userId: parseduserid
            }
        });
        if (!score) {
            res.status(400).json({
                message: "Error while creating score"
            });
        }
        res.status(200).json({
            message: "Score created successfully",
            data: Score
        });
    }
    catch (error) {
        const err = error;
        res.status(400).json({
            message: err.message,
        });
    }
});
exports.createScore = createScore;
