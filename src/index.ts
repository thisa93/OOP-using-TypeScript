import { Circle } from "./Day1/circle";
import { Student } from "./Day1/student";
import { Tv } from "./Day2_AccessModify/tv";
import { Bike } from "./Day3_Inheritance/bike1";
import { Boy } from "./Day4_Polymorphism/Boy";
import { Bank } from "./Day4_PolymorphismUsingInterface/Bank";
import { BOC } from "./Day4_PolymorphismUsingInterface/BOC";
import { HNB } from "./Day4_PolymorphismUsingInterface/HNB";
import { Peoples } from "./Day4_PolymorphismUsingInterface/Peoples";
import { Rectangle, Shape } from "./Day4_PolymorphismUsingInterface/sample";
import { ShapeDemo } from "./ICAE1/ShapeDemo";

function main(){
    //functionForClassCircle();
    //functionForTvClass();
    //functionForInheritance();
    //functionForPolymorphism();
    //functionForBanking();
    functionForICAE1()
}
main();

function functionForClassCircle(){
    const circle1 = new Circle(1);
    const circle2 = new Circle(25);
    const circle3 = new Circle(125);

    console.log("The radius value of circle 1 is "+circle1.getRadius());
    console.log("The radius value of circle 2 is "+circle2.getRadius());
    console.log("The radius value of circle 3 is "+circle3.getRadius());

    console.log("\n");
    console.log("The area of circle 1 = "+circle1.getArea());
    console.log("The area of circle 2 = "+circle2.getArea());
    console.log("The area of circle 3 = "+circle3.getArea());

    console.log("\n");
    console.log("The perimiter of circle 1 = "+circle1.getPerimiter());
    console.log("The perimiter of circle 2 = "+circle2.getPerimiter());
    console.log("The perimiter of circle 3 = "+circle3.getPerimiter());

}

function functionForClassStudent(){
    const student1 = new Student("Jack Sparrow",24,"Colombo");
    console.log(student1.getStudentName());
    student1.setStudentName("Kumar");
    console.log(student1.getStudentName());
}

function functionForTvClass(){
    const obj = new Tv(1,1,false);
    //var tvStatus:boolean = obj.turnOn();
}

function functionForInheritance(){
    const obj = new Bike(50,120);
    obj.getSpeedOfTheBike();
    obj.getSpeedOfTheVehicle();
}

function functionForPolymorphism(){
    const obj = new Boy();
    obj.eat();
}

function functionForBanking(){
    const bankObj = new Bank();
    const bocObj = new BOC();
    const hnbObj = new HNB();
    const peoplesObj = new Peoples();

    console.log("How much I'll get if I deposit "+bankObj.deposit+" in each bank.");
    console.log("I'll get "+bankObj.interest()+" in general");
    console.log("I'll get "+hnbObj.interest()+" in HNB");
    console.log("I'll get "+bocObj.interest()+" in BOC");
    console.log("I'll get "+peoplesObj.interest()+" in Peoples Bank");
}

function functionForICAE1(){
    const obj = new ShapeDemo();
    obj.shepeDemoActions();
}