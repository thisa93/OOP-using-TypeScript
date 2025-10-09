"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const student_1 = require("./student");
function main() {
    const student1 = new student_1.Student("Jack Sparrow", 24, "Colombo");
    console.log(student1.getStudentName());
    student1.setStudentName("Kumar");
    console.log(student1.getStudentName());
}
//main();
//# sourceMappingURL=index.js.map