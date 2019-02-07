import { Component, OnInit } from '@angular/core';
import { Task } from '../task';
import { Router } from '@angular/router';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
page_title="Task"+"'s list";
tasks:Task[];
currentTasks:Task[];
task:Task;

  constructor(private taskService: TaskService, private router: Router) {}

  ngOnInit() {
    this.currentTasks=this.taskService.getCurrentTasks();
  }

  deleteTask(id) {
    this.currentTasks=this.taskService.getCurrentTasks();
     for(let i = 0; i < this.currentTasks.length; i++) {
      if(this.currentTasks[i].id == id) {
          this.currentTasks.splice(i, 1);
      }
    }

    this.taskService.deleteTask(id);
  }

  editTask(id) {
    this.router.navigate(['todo-item/'+ id]);
  }

  completedTask(id) {
    this.currentTasks=this.taskService.getCurrentTasks();
    let newTask:Task;
     for(let i = 0; i < this.currentTasks.length; i++) {
      if(this.currentTasks[i].id == id) {        
          this.currentTasks[i].done=true;
          newTask=this.currentTasks[i];
          this.currentTasks.splice(i, 1);
      }
    }
    this.taskService.deleteTask(id);
    this.taskService.addTask(newTask);
  }

  completedTask1111(id) {
    this.tasks=this.taskService.getTasks();  
    console.log(id);
    console.log(this.tasks);
    let oldTask:Task;
    let newTask:Task;
     for(let i = 0; i < this.tasks.length; i++) {
      if(this.tasks[i].id == id) {
        oldTask=this.tasks[i];
          this.tasks[i].done=true;
          newTask=this.tasks[i];
      }
    }
    this.taskService.updateTask(oldTask, newTask)
    //this.taskService.deleteTask(id);
  }
  
}
