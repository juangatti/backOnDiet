"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const functions_1 = require("./functions");
const route = (0, express_1.default)();
route.get('/', (req, res, next) => {
    const data = (0, functions_1.getFood)();
    res.json(data);
});
exports.default = route;
