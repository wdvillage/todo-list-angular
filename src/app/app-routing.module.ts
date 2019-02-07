import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TodoCompletedComponent }   from './todo-completed/todo-completed.component';
import { TodoItemComponent }   from './todo-item/todo-item.component';
import { TodoListComponent }   from './todo-list/todo-list.component';
import { TodoAddComponent }   from './todo-add/todo-add.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  { path: '', redirectTo: '/todo-list', pathMatch: 'full' },
  { path: 'todo-list', component: TodoListComponent },
  { path: 'todo-add', component: TodoAddComponent },
  { path: 'completed', component: TodoCompletedComponent },
  { path: 'todo-item/:id', component: TodoItemComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}