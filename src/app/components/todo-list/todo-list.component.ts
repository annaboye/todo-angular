import { Component, Input, OnInit } from '@angular/core';
import { Todo } from 'src/models/ITodo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent {
  todos: Todo[] = [];

  handleToggle(todo: Todo) {
    todo.done = !todo.done;
    saveToLs(this.todos);
  }

  addTodo(newTodoText: string) {
    const newTodo: Todo = new Todo(newTodoText, false);
    this.todos.push(newTodo);
    console.log(this.todos);
    saveToLs(this.todos);
  }

  removeTodo(todo: Todo) {
    let indexOfTodo = this.todos.indexOf(todo);
    this.todos.splice(indexOfTodo, 1);
    console.log(this.todos);
    saveToLs(this.todos);
  }

  ngOnInit() {
    const todosFromLs = localStorage.getItem('todos');
    if (todosFromLs) {
      this.todos = JSON.parse(todosFromLs);
    }
  }
}

function saveToLs(todos: Todo[]) {
  localStorage.setItem('todos', JSON.stringify(todos));
}
