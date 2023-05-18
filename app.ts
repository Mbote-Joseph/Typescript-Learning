var num: number = 1;
var str: string = "Hello";
var bool: boolean = true;
var arr: number[] = [1, 2, 3];
var arr2: Array<number> = [1, 2, 3];
var arr3: Array<any> = [1, "Hello", true];
var arr4: any[] = [1, "Hello", true];
var arr5: [number, string, boolean] = [1, "Hello", true];

console.log(num);
console.log(str);
console.log(bool);
console.log(arr);
console.log(arr2);
console.log(arr3);
console.log(arr4);
console.log(arr5);

// How to run the app.ts file
// tsc app.ts
// node app.js

class Car {
  name: string;
  engineCapacity: string;
  constructor(name: string, engineCapacity: string) {
    this.name = name;
    this.engineCapacity = engineCapacity;
  }
  describeCar() {
    console.log(
      `${this.name} car comes with ${this.engineCapacity} displacement`
    );
  }
}
new Car("maruti ciaz", "1500cc").describeCar();
