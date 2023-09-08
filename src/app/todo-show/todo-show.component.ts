import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from 'src/models/ITodo';

@Component({
  selector: 'app-todo-show',
  templateUrl: './todo-show.component.html',
  styleUrls: ['./todo-show.component.css'],
})
export class TodoShowComponent {
  @Input()
  todo!: Todo;
  @Output() todoToggle = new EventEmitter<Todo>();
  @Output() todoRemove = new EventEmitter<Todo>();

  handleToggle() {
    this.todoToggle.emit(this.todo);
  }

  removeTodo(){
    this.todoRemove.emit(this.todo);
  }
}
