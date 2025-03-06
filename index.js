let todos = [];

class Todo {
  #isComplete = false;
  constructor(text) {
    this.text = text;
  }

  toggleComplete() {
    this.#isComplete = !this.#isComplete;
  }

  get isComplete() {
    return this.#isComplete;
  }
}

function addTodo() {
  const text = todoInput.value.trim();
  if (text) {
    todos.push(new Todo(text));
    todoInput.value = '';
    renderTodos()
  }
}

function renderTodos() {
  todoList.innerHTML = "";
  console.log(todos)
  for (let i = 0; i < todos.length; i++) {
    let todo = todos[i];
    displayTodo(todo.text, todo.isComplete, i);
  }
}

function checkboxClicked(index) {
  todos[index].toggleComplete();
  renderTodos();
}

function deleteClicked(index) {
  todos.splice(index, 1);
  renderTodos();
}
