"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_controller_1 = require("../controller/user.controller");
const userRouter = (0, express_1.Router)();
userRouter.get("/dummy", (req, res) => {
    res.json({
        message: "Hello ..."
    });
});
userRouter.post("/create", user_controller_1.createUser);
exports.default = userRouter;
