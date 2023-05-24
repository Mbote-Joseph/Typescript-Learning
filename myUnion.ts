let score: number | string = 33;

score = 45;

score = "45";

// Custom derived

type User = {
  name: string;
  id: number;
};

type Admin = {
  username: string;
  id: number;
};

let joseph: User | Admin = { name: "Joseph", id: 675 };

joseph = { username: "Mbote", id: 6 };

function getDbId(id: number | string) {
  // Making some API calls
  console.log(`DB ID: ${id}`);

  if (typeof id === "string") {
    id.toUpperCase();
    console.log(`DB ID: ${id.toUpperCase()}`);
  } else {
    console.log(`DB ID: ${id}`);
  }
}

// Array
const data: number[] | string[] = [1, 2, 3];
const data1: number[] | string[] = ["1", "2", "3"];
const data2: (string | number | boolean)[] = ["1", 2, true];

let pi: 3.142 = 3.142;

let seatAllotment: "aisle" | "middle" | "window";
seatAllotment = "middle";

export {};
