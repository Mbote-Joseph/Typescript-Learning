function createUser({ name: string, isPaid: boolean }): {
  name: string;
  isPaid: boolean;
} {
  return { name: string, isPaid: boolean };
}

createUser({ name: "Joseph", isPaid: true });

function createCourse({ name: string, isPaid: boolean }): {
  name: string;
  isPaid: boolean;
} {
  return { name: "Joseph", isPaid: true };
}

let newUser = { name: "React", isPaid: false };
createCourse({ name: "Angular", isPaid: true });
createCourse(newUser);

// To define an object with many properties
type Course = {
  name: string;
  price: number;
  enrolled: boolean;
  length: number;
};

function enrollCourse(course: Course): Course {
  return course;
}

function myCourse(course: Course) {
  console.log(
    `${course.name} - ${course.price} - ${course.enrolled} - ${course.length}`
  );
}

let myCourses = [
  { name: "Angular", price: 23, enrolled: true, length: 4 },
  { name: "React", price: 20, enrolled: false, length: 3 },
  { name: "Vue", price: 18, enrolled: true, length: 2 },
];

let text = myCourses.map((course) => {
  myCourse(course);
});

console.log(text);

export {};
