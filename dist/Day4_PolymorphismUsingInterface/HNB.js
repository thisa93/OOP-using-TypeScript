"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HNB = void 0;
const Bank_1 = require("./Bank");
class HNB extends Bank_1.Bank {
    constructor() {
        super();
    }
    interest() {
        return this.deposit * 0.082;
    }
}
exports.HNB = HNB;
//# sourceMappingURL=HNB.js.map