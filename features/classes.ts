class Vehicle{
  color:string;
  constructor(c:string){
    this.color = c;
  }
  protected drive():void{
    console.log("Croom Croom");
  }

  private hoot():void{
    console.log('Beep');
  }
}

class Car extends Vehicle{
  public drive(): void {
      console.log('Go Go Go ha ha ha');
  }
}


const car = new Car('yellow');

car.drive();