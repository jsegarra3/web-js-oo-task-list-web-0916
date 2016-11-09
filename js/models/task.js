'use strict';
// Task Model

const Task = (function createTask(){
  var id = 0;

  return class {
    constructor(desc,priority,list_id){
      this.id = ++id;
      this.desc = desc;
      this.priority = priority;
      this.list_id = list_id;

      stores.push(Object.assign({}, {lists: [...stores.lists],tasks:[...stores.tasks,this]}));
    }
  }
}())
