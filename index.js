// Reference to the input field and the todo list container
const todoInput = document.getElementById('todoInput');
const todoList = document.getElementById('todoList');

// Function to handle adding a new todo
function addTodo() {
  const text = todoInput.value.trim(); // Get the input value and trim whitespace
  if (text === '') {
    alert('Please enter a task!');
    return;
  }

  // Add the new todo to the list
  displayTodo(text, false, todoList.children.length);

  // Clear the input field
  todoInput.value = '';
}

// Function to display a todo item
function displayTodo(text, isComplete, index) {
  const todoItem = document.createElement('li');
  todoItem.className = `todo-item ${isComplete ? 'completed' : ''}`;

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.checked = isComplete;
  checkbox.onclick = () => checkboxClicked(index);

  const todoText = document.createElement('span');
  todoText.className = 'todo-text';
  todoText.textContent = text;

  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  deleteButton.onclick = () => deleteClicked(index);

  todoItem.appendChild(checkbox);
  todoItem.appendChild(todoText);
  todoItem.appendChild(deleteButton);

  todoList.appendChild(todoItem);
}

// Function to handle checkbox click
function checkboxClicked(index) {
  const todoItem = todoList.children[index];
  todoItem.classList.toggle('completed');
}

// Function to handle delete button click
function deleteClicked(index) {
  const todoItem = todoList.children[index];
  todoList.removeChild(todoItem);
}