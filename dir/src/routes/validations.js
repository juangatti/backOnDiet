"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validationIdMongoDB = exports.validationName = exports.validationEmail = void 0;
const validationEmail = (email) => {
    let re = /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i;
    if (!re.test(email)) {
        throw new Error(`${email} no es un id válido`);
    }
};
exports.validationEmail = validationEmail;
const validationName = (name) => {
    let re = /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u;
    if (!re.test(name)) {
        throw new Error(`${name} no es un id válido`);
    }
};
exports.validationName = validationName;
const validationIdMongoDB = (id) => {
    if (id.length !== 24)
        throw new Error(`${id} no es un id válido`);
};
exports.validationIdMongoDB = validationIdMongoDB;
