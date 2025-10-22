"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShapeDemo = void 0;
const Circle_1 = require("./Circle");
const Rectangle_1 = require("./Rectangle");
const Shape_1 = require("./Shape");
const Square_1 = require("./Square");
class ShapeDemo {
    shepeDemoActions() {
        const shape1 = new Shape_1.Shape("red", true);
        const circle1 = new Circle_1.Circle(7.0, "red", true);
        const circle2 = new Circle_1.Circle(2.1, "blue", false);
        const rectangle1 = new Rectangle_1.Rectangle(20, 30, "red", true);
        const rectangle2 = new Rectangle_1.Rectangle(35.5, 45.6, "yellow", false);
        const sqr = new Square_1.Square(50, "green", true);
        console.log(sqr.toString());
    }
}
exports.ShapeDemo = ShapeDemo;
//# sourceMappingURL=ShapeDemo.js.map