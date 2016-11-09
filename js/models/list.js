'use strict';
// List Model
const List = (function createList(){
  var id = 0;

  return class {
    constructor(name){
      this.id = ++id;
      this.name = name;
      store.push(Object.assign({}, {lists: [...store[store.length-1].lists, this],tasks:[...store[store.length-1].tasks]}));
    }
  }
}())
