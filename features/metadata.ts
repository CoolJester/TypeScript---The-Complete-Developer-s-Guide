import 'reflect-metadata';

@printMetadata
class Plane {
  color: string = 'red';

  @markFunction('Information')
  fly(): void{
    console.log("vrrrrrrrrr");
  }
}

function markFunction(secretInfo: string){
  return function (target: Plane, key: string){
    Reflect.defineMetadata('secret', secretInfo, target, key);
  }
}

function printMetadata(target: typeof Plane){
  //looop through the keys
  for (const key in target.prototype) {
    const secret = Reflect.getMetadata('secret', target.prototype, key);
    console.log(secret);
  }
}