'use strict';
// Task Model

const Task = (function createTask(){
  var id = 0;

  return class {
    constructor(desc, priority, list_id){
      this.id = ++id;
      this.description = desc;
      this.priority = priority;
      this.list_id = list_id;

      store.push(Object.assign({}, {lists: [...store[store.length-1].lists], tasks:[...store[store.length-1].tasks,this]}));
    }
  }
}())
