function addTwo(num) {
  return num + 2;
}

addTwo(4);
// It is of Type any and that should not be the case.

function addThree(num: number) {
  return num + 3;
}

addThree(4);
// Now this expects a number to be passed.

function getUpper(value: string) {
  return value.toUpperCase();
}

getUpper("Joseph");

//  Type annotation is very strong.

function signUpUser(
  name: string,
  email: string,
  password: string,
  isPaid: boolean
) {
  return `${name}  ${email}  ${password}  ${
    isPaid ? "Has already paid" : "Hasn't paid"
  }`;
}

let text = signUpUser("Joseph", "mbote@gmail.com", "1234", true);
console.log(text);

function addFive(num: number): number {
  return num + 5;
}

addFive(4);

// The function takes a number and returns a  number

let heros = ["Thor", "Hammer", "IronMan", "SpiderMan"];

heros.map((hero): string => {
  return `The hero is:  ${hero}.`;
});

// The void type
function consoleError(message: string): void {
  console.log(message);
}

// The never type
function handleError(message: string): never {
  throw new Error(message);
}

export {};
