"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function createUser(_a) {
    var string = _a.name, boolean = _a.isPaid;
    return { name: string, isPaid: boolean };
}
createUser({ name: "Joseph", isPaid: true });
function createCourse(_a) {
    var string = _a.name, boolean = _a.isPaid;
    return { name: "Joseph", isPaid: true };
}
var newUser = { name: "React", isPaid: false };
createCourse({ name: "Angular", isPaid: true });
createCourse(newUser);
function enrollCourse(course) {
    return course;
}
function myCourse(course) {
    console.log("".concat(course.name, " - ").concat(course.price, " - ").concat(course.enrolled, " - ").concat(course.length));
}
var myCourses = [
    { name: "Angular", price: 23, enrolled: true, length: 4 },
    { name: "React", price: 20, enrolled: false, length: 3 },
    { name: "Vue", price: 18, enrolled: true, length: 2 },
];
var text = myCourses.map(function (course) {
    myCourse(course);
});
console.log(text);
