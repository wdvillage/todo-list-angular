import { Component, OnInit } from '@angular/core';
import { Task } from '../task';
import { TaskService } from '../task.service';
import {FormControl} from '@angular/forms';
import {TooltipPosition} from '@angular/material';

@Component({
  selector: 'app-todo-completed',
  templateUrl: './todo-completed.component.html',
  styleUrls: ['./todo-completed.component.css']
})
export class TodoCompletedComponent implements OnInit {
page_title='Completed tasks';
tasks:Task[];
completedTasks:Task[];
task:Task;

  positionOption: TooltipPosition = 'after';
  position = new FormControl(this.positionOption);

  constructor(private taskService: TaskService) { }

  ngOnInit() {
  	  this.completedTasks=this.taskService.getCompletedTasks();
  }

  deleteTask(id) {
     for(let i = 0; i < this.completedTasks.length; i++) {
      if(this.completedTasks[i].id == id) {
          this.completedTasks.splice(i, 1);
      }
    }

    this.taskService.deleteTask(id);
  }

    currentTask(id) {
    this.completedTasks=this.taskService.getCompletedTasks();
    let newTask:Task;
     for(let i = 0; i < this.completedTasks.length; i++) {
      if(this.completedTasks[i].id == id) {        
          this.completedTasks[i].done=false;
          newTask=this.completedTasks[i];
          this.completedTasks.splice(i, 1);
      }
    }
    this.taskService.deleteTask(id);
    this.taskService.addTask(newTask);
  }

}
