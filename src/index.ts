import { Student } from "./Day1/student";

function main(){
    const student1 = new Student("Jack Sparrow",24,"Colombo");
    console.log(student1.getStudentName());
    student1.setStudentName("Kumar");
    console.log(student1.getStudentName());
}
main();