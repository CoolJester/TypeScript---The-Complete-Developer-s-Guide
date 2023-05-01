class ArrayOfNumbers{
  constructor(public collection: number[]){}

  get(index: number): number{
    return this.collection[index];
  }
} 

class ArrayOfString{
  constructor(public collection: string[]){}

  get(index:number):string {
    return this.collection[index];
  }
}

class ArrayOfAnything <Type>{
  constructor(public collection: Type[]){}
  
  get(index: number): Type{
    return this.collection[index];
  }
}

//functions of generics
function printStrings(arr: string[]):void{
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

function printAnything<T>(arr: T[]):void{
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);    
  }
}

//generic constraints
class MyCar{
  print(){
    console.log("I am a car");
  }
}

class MyHouse{
  print(){
    console.log("I am a house");
  }
}

interface Printable{
  print():void;
}

function myPrintAnything<T extends Printable>(arr: T[]):void{
  for (let i = 0; i < arr.length; i++) {
    arr[i].print();
  }
}