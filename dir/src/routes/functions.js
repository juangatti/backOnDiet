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
exports.deleteUser = exports.postCombinations = exports.putUser = exports.postUser = exports.getUser = exports.putFood = exports.postFood = exports.getFood = void 0;
const models_1 = require("../models/models");
const argon2_1 = __importDefault(require("argon2"));
const validations_1 = require("./validations");
/// Function get all foods
function getFood() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const data = yield models_1.FoodModel.find().lean();
            return data;
        }
        catch (err) {
            throw Error(err);
        }
    });
}
exports.getFood = getFood;
/// Function post food
function postFood(Name, Description) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            (0, validations_1.validationName)(Name);
            const compare = yield models_1.FoodModel.findOne({ Name }).lean();
            if (compare !== null) {
                return null;
            }
            if (Description) {
                yield models_1.FoodModel.create({ Name, Description });
                return { Name, Description };
            }
            else {
                yield models_1.FoodModel.create({ Name });
                return { Name };
            }
        }
        catch (err) {
            throw Error(err);
        }
    });
}
exports.postFood = postFood;
/// Function put food
function putFood(id, Name, Description) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            (0, validations_1.validationName)(Name);
            yield models_1.FoodModel.findByIdAndUpdate({ _id: id }, { Name, Description });
            const compare = yield models_1.FoodModel.findById({ _id: id }).lean();
            if (compare && compare.Name === Name) {
                return compare;
            }
            else {
                return null;
            }
        }
        catch (err) {
            throw Error(err);
        }
    });
}
exports.putFood = putFood;
/// Function get users  
function getUser(mail, password) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const data = yield models_1.UserModel.findOne({ mail }).lean();
            if (yield argon2_1.default.verify(data.password, password)) {
                // password match
                return data;
            }
            else {
                // password did not match
                return null;
            }
        }
        catch (err) {
            throw Error(err);
        }
    });
}
exports.getUser = getUser;
//function post user
function postUser(firstName, lastName, mail, password, phone, adress) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            (0, validations_1.validationEmail)(mail);
            (0, validations_1.validationName)(firstName);
            (0, validations_1.validationName)(lastName);
            let hash = yield argon2_1.default.hash(password);
            yield models_1.UserModel.create({ firstName, lastName, mail, password: hash, phone, adress });
            return true;
        }
        catch (err) {
            throw Error(err);
        }
    });
}
exports.postUser = postUser;
// function put User
function putUser(id, firstName, lastName, mail, password, phone, adress) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield models_1.UserModel.findByIdAndUpdate({ _id: id }, { firstName, lastName, mail, password, phone, adress });
            const compare = yield models_1.UserModel.findById({ _id: id });
            if (compare && compare.firstName === firstName && compare.lastName === lastName && compare.mail === mail && compare.phone === phone && compare.adress === adress) {
                return compare;
            }
            else {
                return null;
            }
        }
        catch (err) {
            throw Error(err);
        }
    });
}
exports.putUser = putUser;
/// Function post combinations
function postCombinations(Lunch, LunchDessert, Dinner, DinnerDessert) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield models_1.CominacionsModel.create({ Lunch, LunchDessert, Dinner, DinnerDessert });
            return { Lunch, LunchDessert, Dinner, DinnerDessert };
        }
        catch (err) {
            throw Error(err);
        }
    });
}
exports.postCombinations = postCombinations;
function deleteUser(id) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            (0, validations_1.validationIdMongoDB)(id);
            yield models_1.UserModel.findByIdAndDelete({ _id: id });
        }
        catch (err) {
            throw Error(err);
        }
    });
}
exports.deleteUser = deleteUser;
