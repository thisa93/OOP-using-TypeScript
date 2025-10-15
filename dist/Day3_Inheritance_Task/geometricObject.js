"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GeometricObject = void 0;
class GeometricObject {
    color;
    filled;
    dateCreated;
    constructor(color, filled, dateCreated) {
        this.color = color;
        this.filled = filled;
        this.dateCreated = new Date();
    }
    getColor() {
        return this.color;
    }
    setColor(color) {
        this.color = color;
    }
    isFilled() {
        return this.filled;
    }
    setFilled(filled) {
        this.filled = filled;
    }
    getDateCreated() {
        return this.dateCreated;
    }
}
exports.GeometricObject = GeometricObject;
//# sourceMappingURL=geometricObject.js.map