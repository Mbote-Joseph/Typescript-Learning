class User {
  name: string;
  registrationNumber: string;
  email: string;
  course: string;

  constructor(
    name: string,
    registrationNumber: string,
    email: string,
    course: string
  ) {
    this.name = name;
    this.registrationNumber = registrationNumber;
    this.email = email;
    this.course = course;
  }
}

const mbote = new User(
  "Joseph Mbote",
  "SCT211-0011/2018",
  "joseph.mbogo@students.jkuat.ac.ke",
  "Computer Science"
);

// let Students []= [];

console.log(mbote);
