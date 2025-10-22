"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rectangle = void 0;
const Shape_1 = require("./Shape");
class Rectangle extends Shape_1.Shape {
    width;
    length;
    constructor(width, length, colour, filled) {
        super(colour, filled);
        this.width = width;
        this.length = length;
    }
    setWidth(width) {
        this.width = width;
    }
    setLength(length) {
        this.length = length;
    }
    getWidth() {
        return this.width;
    }
    getLength() {
        return this.length;
    }
    getArea() {
        return (this.length * this.width);
    }
    getPerimeter() {
        return (2 * (this.length + this.width));
    }
    toString() {
        return `A rectangle width = ${this.width} and length = ${this.length}, which is a subclass of ${super.toString()}`;
    }
}
exports.Rectangle = Rectangle;
//# sourceMappingURL=Rectangle.js.map