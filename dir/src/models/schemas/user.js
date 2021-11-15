"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
/*
  Creacion de schema para poder subir la informacion del usuario
*/
const schema = new mongoose_1.Schema({
    admin: { type: Boolean, default: false, required: false },
    firstName: { type: String, required: true, validate: {
            validator: function (value) {
                const re = /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u;
                if (!re.test(value)) {
                    return false;
                }
                return true;
            }
        } },
    lastName: { type: String, required: true, validate: {
            validator: function (value) {
                const re = /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u;
                if (!re.test(value)) {
                    return false;
                }
                return true;
            }
        } },
    mail: { type: String, required: true, validate: {
            validator: function (value) {
                const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
                if (!re.test(value)) {
                    return false;
                }
                return true;
            }
        } },
    password: { type: String, required: true },
    phone: { type: String, required: true },
    adress: { type: String, required: true }
});
exports.default = schema;
