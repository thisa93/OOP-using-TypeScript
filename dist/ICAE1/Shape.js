"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Shape = void 0;
class Shape {
    colour;
    filled;
    constructor(colour, filled) {
        this.colour = colour;
        this.filled = filled;
    }
    getColour() {
        return this.colour;
    }
    getFilled() {
        return this.filled;
    }
    setColour(colour) {
        this.colour = colour;
    }
    setFilled(filled) {
        this.filled = filled;
    }
    toString() {
        return `A shape with colour ${this.colour} and ${this.filled ? "filled" : "not filled"}.`;
    }
}
exports.Shape = Shape;
//# sourceMappingURL=Shape.js.map