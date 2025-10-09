"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const circle_1 = require("./Day1/circle");
const student_1 = require("./Day1/student");
function main() {
    functionForClassCircle();
}
main();
function functionForClassCircle() {
    const circle1 = new circle_1.Circle(1);
    const circle2 = new circle_1.Circle(25);
    const circle3 = new circle_1.Circle(125);
    console.log("The radius value of circle 1 is " + circle1.getRadius());
    console.log("The radius value of circle 2 is " + circle2.getRadius());
    console.log("The radius value of circle 3 is " + circle3.getRadius());
    console.log("\n");
    console.log("The area of circle 1 = " + circle1.getArea());
    console.log("The area of circle 2 = " + circle2.getArea());
    console.log("The area of circle 3 = " + circle3.getArea());
    console.log("\n");
    console.log("The perimiter of circle 1 = " + circle1.getPerimiter());
    console.log("The perimiter of circle 2 = " + circle2.getPerimiter());
    console.log("The perimiter of circle 3 = " + circle3.getPerimiter());
}
function functionForClassStudent() {
    const student1 = new student_1.Student("Jack Sparrow", 24, "Colombo");
    console.log(student1.getStudentName());
    student1.setStudentName("Kumar");
    console.log(student1.getStudentName());
}
//# sourceMappingURL=index.js.map