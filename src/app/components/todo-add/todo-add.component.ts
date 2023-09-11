import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.css'],
})
export class TodoAddComponent {
  @Output() todoAdded = new EventEmitter<string>();

  newTodoText: string = '';

  addTodo() {
    this.todoAdded.emit(this.newTodoText);
    this.newTodoText = '';
  }
}
