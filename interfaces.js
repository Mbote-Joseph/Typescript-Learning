"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mbote = {
    email: "mbote@gmail.com",
    userId: 33,
    githubToken: "tyuhgb6788",
    startTrail: function () {
        return "Trail started";
    },
    getCoupon: function (name) {
        //The name doesn't necessarily need to match the name that was passed
        return 10;
    },
};
var jose = {
    email: "mbote@gmail.com",
    userId: 33,
    githubToken: "tyuhgb6788",
    role: "admin",
    startTrail: function () {
        return "Trail started";
    },
    getCoupon: function (name) {
        //The name doesn't necessarily need to match the name that was passed
        return 10;
    },
};
console.log(mbote);
console.log(mbote.email);
console.log(mbote.userId);
console.log(jose);
