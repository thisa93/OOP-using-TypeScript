"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Circle {
    radius;
    constructor(radius) {
        this.radius = radius;
    }
    area() {
        return Math.PI * this.radius * this.radius;
    }
}
class Rectangle {
    width;
    height;
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    area() {
        return this.width * this.height;
    }
}
function printArea(shape) {
    console.log("Area:", shape.area());
}
const shapes = [
    new Circle(5),
    new Rectangle(4, 6)
];
shapes.forEach(printArea);
//# sourceMappingURL=sample.js.map