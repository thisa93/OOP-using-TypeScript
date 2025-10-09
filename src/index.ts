import { Circle } from "./Day1/circle";
import { Student } from "./Day1/student";

function main(){
    functionForClassCircle();
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