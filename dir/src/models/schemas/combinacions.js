"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const schema = new mongoose_1.Schema({
    Lunch: { type: mongoose_1.Schema.Types.ObjectId, required: true, ref: 'food' },
    LunchDessert: { type: mongoose_1.Schema.Types.ObjectId, required: false, ref: 'food' },
    Dinner: { type: mongoose_1.Schema.Types.ObjectId, required: true, ref: 'food' },
    DinnerDessert: { type: mongoose_1.Schema.Types.ObjectId, required: false, ref: 'food' }
});
exports.default = schema;
