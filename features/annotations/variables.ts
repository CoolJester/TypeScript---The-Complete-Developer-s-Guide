//Simple data
let apple: number = 5;

let speed: string = "fast";

let hasName: boolean = true;

let nothingMuch: null = null;

let nothing: undefined = undefined;

let now: Date = new Date();

//Arrays
let colors: string[] = ["red", "yellow"];

let myAges: number[] = [1, 2, 3];

let trues: boolean[] = [true, false];

//Class
class Car {}

let car: Car = new Car();

//Object
let point: { x: number; y: number } = {
  x: 10,
  y: 20,
};

const profile = {
  name: "Ntsako",
  age: 22,
  coords: {
    lat: 1,
    lng: 12,
  },
  setAge(age: number): void {
    this.age = age;
  },
};

//Destructuring using ES6
const myAge: { age: number } = profile;
const { age }: { age: number } = profile;

const {
  coords: { lat, lng },
}: { coords: { lat: number; lng: number } } = profile;

//function
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

const add = (a: number, b: number): number => {
  return a + b;
};

function divide(a: number, b: number): number {
  return a / b;
}

const multiply = function (a: number, b: number): number {
  return a * b;
};

const logger = (message: string): void => {
  console.log(logger);
};
