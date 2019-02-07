import { Component, OnInit } from '@angular/core';
import { Task } from '../task';
import { FormGroup, FormControl } from '@angular/forms';
import { TaskService } from '../task.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
page_title="Edit task";
task:Task;
tasks:Task[];
id:any;

public item_form : FormGroup = new FormGroup({
  name: new FormControl(),
  description: new FormControl(),
})

  constructor(private _Activatedroute:ActivatedRoute, private taskService: TaskService, private router: Router) { }

  ngOnInit() {
     this.id=this._Activatedroute.snapshot.params['id'];
    let tasks=this.taskService.getTasks();
    this.task=tasks.find(p => p.id==this.id);
    console.log(this.task);
    this.item_form.get('name').setValue(this.task.name);
    this.item_form.get('description').setValue(this.task.description);
  }

  update(id) {

    if (this.item_form.value.name || this.item_form.value.description) {

    let tasks=this.taskService.getTasks();
    this.task=tasks.find(p => p.id==this.id);
    let oldTask=this.task;

    let newTask = {
      id:oldTask.id,
      done: oldTask.done,
      name: this.item_form.value.name,
      description: this.item_form.value.description,
    }

    this.taskService.updateTask(oldTask, newTask);
    this.router.navigate(['todo-list']);
    }
  }


}
