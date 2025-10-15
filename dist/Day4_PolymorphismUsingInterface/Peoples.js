"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Peoples = void 0;
const Bank_1 = require("./Bank");
class Peoples extends Bank_1.Bank {
    constructor() {
        super();
    }
    interest() {
        return this.deposit * 0.079;
    }
}
exports.Peoples = Peoples;
//# sourceMappingURL=Peoples.js.map