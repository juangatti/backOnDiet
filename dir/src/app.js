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
const morgan_1 = __importDefault(require("morgan"));
const dotenv_1 = __importDefault(require("dotenv"));
const mongoose_1 = require("mongoose");
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
const food_1 = __importDefault(require("./routes/food"));
dotenv_1.default.config();
function Conexion() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const url = process.env.DB_URL;
            yield (0, mongoose_1.connect)(`${url}`);
            console.log('Conexion a la base de datos establecida');
        }
        catch (error) {
            console.log(error);
        }
    });
}
function App(port) {
    const app = (0, express_1.default)();
    /// Conexions
    Conexion();
    app.set('port', port || 3001);
    /// Middlewares
    app.use(body_parser_1.default.urlencoded({ extended: false }));
    app.use(body_parser_1.default.json());
    app.use((0, morgan_1.default)('dev'));
    app.use((0, cors_1.default)());
    /// Routes
    app.use('/food', food_1.default);
    /// Listening
    app.listen(app.get('port'), () => {
        console.log(`Server is running on port ${app.get('port')}`);
    });
}
exports.default = App;
