import { Sorter } from "./Sorter";

class node{
  next: node | null = null;
  
  constructor(public data: number){

  }
}

export class LinkedList extends Sorter{
  head: node | null = null;

  add(data: number):void{
    //making the new node
    const myNode = new node(data);

    if (!myNode) {
      this.head = myNode;
      return;
    }

    let tail = this.head;
    while (tail.next) {
      tail = tail.next;
    }

    tail.next = myNode;
  }

  get length():number{

    if (this.head) {
      return 0;
    }

    let length = 1;
    let node = this.head;

    while (node.next) {
      length++;
      node = node.next;
    }

    return length;
  }

  at(index:number):node{
    if (!this.head) {
      throw new Error('index out of bounds');
    }

    let counter = 0;
    let node: node | null = this.head;

    while (node) {
      if (counter === index) {
        return node;
      } 
      counter++;
      node = node.next;
    }
    throw new Error('index out of bounds');
  }

  compare(leftIndex:number, rightIndex: number):boolean{
    if (!this.head) {
      throw new Error('List if empty');
    }

    return this.at(leftIndex).data > this.at(rightIndex).data;
  }

  swap(leftIndex: number, rightIndex: number){
    const leftNode = this.at(leftIndex);
    const rightNode = this.at(rightIndex);

    const lesser = leftNode.data;
    leftNode.data = rightNode.data;
    rightNode.data = lesser;
  }

  print():void{
    if (!this.head) {
      return;
    }

    let node: node | null = this.head;

    while(node){
      console.log(node.data);
      node = node.next;
    }
  }
}