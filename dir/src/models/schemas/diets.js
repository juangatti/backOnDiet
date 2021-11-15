"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const schema = new mongoose_1.Schema({
    FirstWeek: { type: mongoose_1.Schema.Types.ObjectId, required: true },
    SecondWeek: { type: mongoose_1.Schema.Types.ObjectId, required: false },
    ThirdWeek: { type: mongoose_1.Schema.Types.ObjectId, required: false },
    FourthWeek: { type: mongoose_1.Schema.Types.ObjectId, required: false }
});
exports.default = schema;
