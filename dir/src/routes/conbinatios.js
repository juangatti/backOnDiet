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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const functions_1 = require("./functions");
const routes = (0, express_1.default)();
routes.post('/', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { Launch, LunchDessert, Dinner, DinnerDessert } = req.body;
        const data = yield (0, functions_1.postCombinations)(Launch, LunchDessert, Dinner, DinnerDessert);
        res.json(data);
    }
    catch (err) {
    }
}));
exports.default = routes;
