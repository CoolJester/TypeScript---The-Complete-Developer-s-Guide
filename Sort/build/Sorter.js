"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sorter = void 0;
//bubble sort algorithm
class Sorter {
    constructor(collection) {
        this.collection = collection;
    }
    sort() {
        const { length } = this.collection;
        for (let i = 0; i < length; i++) {
            for (let j = 0; j < length - 1 - i; j++) {
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
                if (this.collection.compare(j, j + 1)) {
                    this.collection.swap(j, j + 1);
                }
            }
        }
    }
}
exports.Sorter = Sorter;
