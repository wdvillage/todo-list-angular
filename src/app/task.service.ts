import { Injectable } from '@angular/core';
import { Task } from './task';
import { TASKS } from './initial-data';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
public tasks:Task[];
//public currentTasks:Task[];
//public completedTasks:Task[];
public task:Task;
  constructor() { }

  getTasks() {
     this.tasks = JSON.parse(localStorage.getItem('todoListAngular'));
     return this.tasks;
	}

  getCurrentTasks() {
     let currentTasks=[];
     this.tasks = JSON.parse(localStorage.getItem('todoListAngular'));
     if (this.tasks!=null || this.tasks!=undefined ) { 
     this.tasks.forEach(function(item, i, tasks) {
      if (item.done===false) {
      currentTasks.push(item);
      }
    });
   } else {
     currentTasks=[];
   }
     return currentTasks;
   }

  getCompletedTasks() {
    let completedTasks=[];
     this.tasks = JSON.parse(localStorage.getItem('todoListAngular'));
     this.tasks.forEach(function(item, i, tasks) {
      if (item.done===true) {
      completedTasks.push(item);
      }
    });
     return completedTasks;
  }

  addTask(task) {
      let tasks = JSON.parse(localStorage.getItem('todoListAngular'));
      if (this.tasks===null || this.tasks===undefined) {tasks=[];}
      tasks.push(task);
      localStorage.setItem('todoListAngular', JSON.stringify(tasks));
	}

  deleteTask(id) {
     let tasks = JSON.parse(localStorage.getItem('todoListAngular'));
     for(let i = 0; i <tasks.length; i++) {
      if(tasks[i].id == id) {
        tasks.splice(i, 1);
      }
   }
      localStorage.setItem('todoListAngular', JSON.stringify(tasks));
   }

  updateTask(oldTask, newTask){  
      let tasks = JSON.parse(localStorage.getItem('todoListAngular'));

     for(let i = 0; i <tasks.length; i++) {
      if(tasks[i].id == oldTask.id) {
        tasks[i] = newTask;
      }
   }
      localStorage.setItem('todoListAngular', JSON.stringify(tasks));
   }

}
