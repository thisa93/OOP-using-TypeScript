"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const circle_1 = require("./Day1/circle");
const student_1 = require("./Day1/student");
const tv_1 = require("./Day2_AccessModify/tv");
const bike1_1 = require("./Day3_Inheritance/bike1");
const Boy_1 = require("./Day4_Polymorphism/Boy");
const Bank_1 = require("./Day4_PolymorphismUsingInterface/Bank");
const BOC_1 = require("./Day4_PolymorphismUsingInterface/BOC");
const HNB_1 = require("./Day4_PolymorphismUsingInterface/HNB");
const Peoples_1 = require("./Day4_PolymorphismUsingInterface/Peoples");
function main() {
    //functionForClassCircle();
    //functionForTvClass();
    //functionForInheritance();
    //functionForPolymorphism();
    functionForBanking();
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
function functionForTvClass() {
    const obj = new tv_1.Tv(1, 1, false);
    //var tvStatus:boolean = obj.turnOn();
}
function functionForInheritance() {
    const obj = new bike1_1.Bike(50, 120);
    obj.getSpeedOfTheBike();
    obj.getSpeedOfTheVehicle();
}
function functionForPolymorphism() {
    const obj = new Boy_1.Boy();
    obj.eat();
}
function functionForBanking() {
    const bankObj = new Bank_1.Bank();
    const bocObj = new BOC_1.BOC();
    const hnbObj = new HNB_1.HNB();
    const peoplesObj = new Peoples_1.Peoples();
    console.log("How much I'll get if I deposit " + bankObj.deposit + " in each bank.");
    console.log("I'll get " + bankObj.interest() + " in general");
    console.log("I'll get " + hnbObj.interest() + " in HNB");
    console.log("I'll get " + bocObj.interest() + " in BOC");
    console.log("I'll get " + peoplesObj.interest() + " in Peoples Bank");
}
//# sourceMappingURL=index.js.map