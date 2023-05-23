"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    return num + 2;
}
addTwo(4);
// It is of Type any and that should not be the case.
function addThree(num) {
    return num + 3;
}
addThree(4);
// Now this expects a number to be passed.
function getUpper(value) {
    return value.toUpperCase();
}
getUpper("Joseph");
//  Type annotation is very strong.
function signUpUser(name, email, password, isPaid) {
    return "".concat(name, "  ").concat(email, "  ").concat(password, "  ").concat(isPaid ? "Has already paid" : "Hasn't paid");
}
var text = signUpUser("Joseph", "mbote@gmail.com", "1234", true);
console.log(text);
