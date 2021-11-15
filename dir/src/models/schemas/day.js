"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const schema = new mongoose_1.Schema({
    Monday: { type: mongoose_1.Schema.Types.ObjectId, required: true },
    Tuesday: { type: mongoose_1.Schema.Types.ObjectId, required: true },
    Wednesday: { type: mongoose_1.Schema.Types.ObjectId, required: true },
    Thursday: { type: mongoose_1.Schema.Types.ObjectId, required: true },
    Friday: { type: mongoose_1.Schema.Types.ObjectId, required: true },
    Saturday: { type: mongoose_1.Schema.Types.ObjectId, required: true },
    Sunday: { type: mongoose_1.Schema.Types.ObjectId, required: true },
});
exports.default = schema;
