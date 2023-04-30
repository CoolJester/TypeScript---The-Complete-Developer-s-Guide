interface Sortable{
  length:number;
  compare(leftIndex: number, rightIndex: number): boolean;
  swap(leftIndex:number, rightIndex: number): void;
}

//bubble sort algorithm
export abstract class Sorter {

  abstract compare(leftIndex: number, rightIndex: number): boolean;
  abstract swap(leftIndex: number, rightIndex: number): void;
  abstract length: number;

  sort():void {
    const { length } = this;

    for (let i = 0; i < length; i++) {

      
      for (let j = 0; j < length - 1- i; j++) {
        // //check if it is a number (Bad Solution)
        // //using a type guard
        // if (this.collection instanceof Array) {
        //   //collection === number[]
        //   if (this.collection[j] > this.collection[j + 1]) {
        //     const lesser = this.collection[j];  
        //     this.collection[j] = this.collection[j + 1];
        //     this.collection[j + 1] = lesser;
        //   }   
        // }     

        // //check if it is a string
        // if (typeof this.collection === 'string') {
        //   this.collection
        // }

        if (this.compare(j, j + 1)) {
          this.swap(j, j + 1)
        }

      }
    }
  }
}
 