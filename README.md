# Typescript Learning

## Introduction

- Typescript is a superset of JavaScript but it allows you to write your JavaScript code in a more precise manner. This ensures that the errors are caught easily.
- ANy code that ois written in JavaScript is compiled into JavaScript.
- TypeScript is NOT about reinventing JavaScript.
- Don't use Typescript unless:

```sh
- The project is huge and needs lot of type safety checks.
```

### Type Safety

- It is about Type Safety.
- This ensures that mismatching errors are caught
- If one is consistent with the type of the variable it is very easy to catch the error.

### What Typescript does :

- Static Checking
- Like trying to access an object which is not defined.
- Trying to add a number of a variable that is not a number.
- Analyze the code as we type. That's it.

### What Typescript is not :

-

# Writing Typescript

- File has the extension of .ts
- TS is always transpiled into JavaScript
- Typescript is a development tool, Your project will be converted into JavaScript in production.

# Types

- Number
- String
- Boolean
- Others are : Null, Undefined, Void, Object, Array, Tuple ..., Any, Never, Unknown
- Using Any Type makes the code more of a JavaScript like.

## Situations

- A function accepts two numbers. - It ensures that the values passed to the function are actually numbers.
- A function returns a string.

## Syntax

```javascript
let variableName: type = value;
```

- All types of typescript are in lowercase.

## Best practice when dealing with TypeScript

- Primitive types are: string, number, boolean
- Type Any
- Type Array
- number caters for both int and float values

- Prevent doing the too obvious things when dealing with primitives.
  Example

```javascript
let userId: number;
userId: 35433.5;
```

- Instead use:

```javascript
let userId: number = 35433.5;
```

- That is the type inference capability of typescript.

## Don't use any

- Using `any` disables all further type checking, and it is assumed
- You usually want to avoid this, though, because any isn’t type-checked. Use the compiler flag noImplicitAny to flag any implicit any as an error.

### Void and Never types

```javascript
// The void type
function consoleError(message: string): void {
  console.log(message);
}

// The never type
function handleError(message: string): never {
  throw new Error(message);
}
```

## Bad behavior of objects

- When interacting with the database, we often interact with objects.

```javascript
let object ={
    name: 'foo',
    email: 'foo@example.com
    isActive: true
}
```

### Type Aliases

```javascript
// To define an object with many properties
type Course = {
  name: string,
  price: number,
  enrolled: boolean,
  length: number,
};

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
```

### Read Only definitions
