"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BOC = void 0;
const Bank_1 = require("./Bank");
class BOC extends Bank_1.Bank {
    constructor() {
        super();
    }
    interest() {
        return this.deposit * 0.082;
    }
}
exports.BOC = BOC;
//# sourceMappingURL=BOC.js.map