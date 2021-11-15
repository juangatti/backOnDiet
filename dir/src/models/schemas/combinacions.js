"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const schema = new mongoose_1.Schema({
    Lunch: { type: mongoose_1.Schema.Types.ObjectId, required: true },
    LunchDessert: { type: mongoose_1.Schema.Types.ObjectId, required: false },
    Dinner: { type: mongoose_1.Schema.Types.ObjectId, required: true },
    DinnerDessert: { type: mongoose_1.Schema.Types.ObjectId, required: false }
});
exports.default = schema;
