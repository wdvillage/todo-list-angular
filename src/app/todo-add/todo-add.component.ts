import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Task } from '../task';
import { v4 as uuid } from 'uuid';
import { TaskService } from '../task.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.css']
})
export class TodoAddComponent implements OnInit {

public add_form : FormGroup = new FormGroup({
  name: new FormControl('', Validators.required),
	description: new FormControl('', Validators.required),
})

task:Task;
page_title='Add task';

  constructor(private taskService: TaskService, private router: Router) {}

  ngOnInit() {}

  submit() {
    if (this.add_form.value.name) {
        let newtask = {
      id:uuid(),
      done: false,
      name: this.add_form.value.name,
      description: this.add_form.value.description,
    }

    this.add_form.reset();
    this.taskService.addTask(newtask);
    this.router.navigate(['todo-list']);
    }
  }


}
