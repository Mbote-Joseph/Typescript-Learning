var User = /** @class */ (function () {
    function User(name, registrationNumber, email, course) {
        this.name = name;
        this.registrationNumber = registrationNumber;
        this.email = email;
        this.course = course;
    }
    return User;
}());
var mbote = new User("Joseph Mbote", "SCT211-0011/2018", "joseph.mbogo@students.jkuat.ac.ke", "Computer Science");
console.log(mbote);
