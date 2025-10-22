"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Square = void 0;
const Rectangle_1 = require("./Rectangle");
class Square extends Rectangle_1.Rectangle {
    constructor(side, colour, filled) {
        super(side, side, colour, filled);
    }
    getSide() {
        return super.getWidth();
    }
    setSide(side) {
        this.setWidth(side);
        this.setLength(side);
    }
    toString() {
        return `A Ractangle width = ${this.getWidth()} and length = ${this.getLength()}, which is a subclass of ${super.toString()}`;
    }
}
exports.Square = Square;
//# sourceMappingURL=Square.js.map