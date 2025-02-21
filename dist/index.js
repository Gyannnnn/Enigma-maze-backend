"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const user_routes_1 = __importDefault(require("./routes/user.routes"));
const score_routes_1 = __importDefault(require("./routes/score.routes"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.get("/", (req, res) => {
    res.json({
        message: "Welcome to maze backend",
        version: "1.0.0",
        author: "Rocket",
    });
});
app.use("/api/v1/user", user_routes_1.default);
app.use("/api/v1/score", score_routes_1.default);
app.listen(process.env.PORT || 3001, () => {
    console.log(`Server is running at http://localhost:${process.env.PORT || 3001}`);
});
