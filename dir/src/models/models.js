"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModel = exports.FoodModel = exports.DayModel = exports.DietModel = exports.CominacionsModel = void 0;
const mongoose_1 = require("mongoose");
const combinacions_1 = __importDefault(require("./schemas/combinacions"));
const diets_1 = __importDefault(require("./schemas/diets"));
const day_1 = __importDefault(require("./schemas/day"));
const food_1 = __importDefault(require("./schemas/food"));
const user_1 = __importDefault(require("./schemas/user"));
exports.CominacionsModel = (0, mongoose_1.model)('cominacion', combinacions_1.default);
exports.DietModel = (0, mongoose_1.model)('diet', diets_1.default);
exports.DayModel = (0, mongoose_1.model)('day', day_1.default);
exports.FoodModel = (0, mongoose_1.model)('food', food_1.default);
exports.UserModel = (0, mongoose_1.model)('user', user_1.default);
