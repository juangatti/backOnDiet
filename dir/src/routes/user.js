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
const route = (0, express_1.default)();
route.get('/', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { mail, password } = req.body;
        const data = yield (0, functions_1.getUser)(mail, password);
        if (data !== null) {
            res.json(data);
        }
        else {
            res.status(404).json({ message: 'Wrong Password' });
        }
    }
    catch (err) {
        next(err);
    }
}));
route.post('/', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { firstName, lastName, mail, password, phone, adress } = req.body;
        const data = yield (0, functions_1.postUser)(firstName, lastName, mail, password, phone, adress);
        if (data === true) {
            res.status(201).json({ message: 'User created' });
        }
        else {
            res.status(404).json({ message: 'User already exists' });
        }
    }
    catch (err) {
        next(err);
    }
}));
route.put('/ChangeUser', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { firstName, lastName, mail, password, phone, adress, _id } = req.body;
        const data = yield (0, functions_1.putUser)(firstName, lastName, mail, password, phone, adress, _id);
        if (data !== null) {
            res.status(201).json({ message: 'Succefully change user' });
        }
        else {
            res.status(404).json({ message: 'User already exists' });
        }
    }
    catch (err) {
        next(err);
    }
}));
route.delete('/ChangeUser', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.body;
    try {
        yield (0, functions_1.deleteUser)(id);
        res.status(201).json({ message: 'User deleted' });
    }
    catch (err) {
        next(err);
    }
}));
exports.default = route;
