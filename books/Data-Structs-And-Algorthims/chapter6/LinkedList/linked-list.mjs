import { defaultEquals } from './util.mjs';
import { Node } from './models/linked-list-models.mjs';

export default class LinkedList {
  constructor(equalsFn = defaultEquals ) {
    this.count = 0; 
    this.head = undefined; 
    this.equalsFn = equalsFn;
  }


  push(element){ 
    const node = new Node(element); 
    let current;

    if(this.head == null) {
      this.head = node;
    } else {
      current = this.head;
      while(current.next != null) {
        current = current.next
      }
      current.next = node;
    }

    this.count++
  }

  //TODO
  insert(element, position){ return { element, position }}

  //TODO
  getElementAt(index){ 
    if(index >= 0 && index <= this.count){
      let node = this.head;
      for(let i = 0; i < index && node != null; i++) {
        node = node.next
      }
      return node;
    }
    return undefined;
  }

  //TODO
  remove(element){ return element }

  //TODO
  indexOf(element){ return element }

  removeAt(index){ 
    if(index >= 0 && index < this.count) {
      let current = this.head; 
      if(index == 0) {
        this.head = current.next;
      } else {
        let previos; 
        for(let i =0; i < index; i++){
          previos = current;
          current = current.next;
        }

        previos.next = current.next
      }
      this.count--
      return current.element;
    }
    return undefined;
  }

  isEmpty(){ 
    return !this.head 
  }

  size(){ 
    return this.count
  }

  //TODO
  toString(){ return "" }
}


const list = new LinkedList()
list.push(1)
list.push(10)
list.push(3)

console.log(list.getElementAt(1))


