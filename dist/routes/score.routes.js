"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const score_controller_1 = require("../controller/score.controller");
const scoreRouter = (0, express_1.Router)();
scoreRouter.post("/create", score_controller_1.createScore);
exports.default = scoreRouter;
