"use strict";
//Parent : Bank 2.5%
//Children : BOC-8.2%, Peoples-7.9%, HNB-7.3%
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bank = void 0;
class Bank {
    deposit = 100000;
    interest() {
        return this.deposit * 0.025;
    }
}
exports.Bank = Bank;
//# sourceMappingURL=Bank.js.map