"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rectangle = void 0;
const geometricObject_1 = require("./geometricObject");
class Rectangle extends geometricObject_1.GeometricObject {
    width;
    height;
    constructor(width, height, color, filled, dateCreated) {
        super(color, filled, dateCreated);
        this.width = width;
        this.height = height;
    }
}
exports.Rectangle = Rectangle;
//# sourceMappingURL=rectangle.js.map