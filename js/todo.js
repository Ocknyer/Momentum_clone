const todoForm = document.getElementById('todo-form');
const todoInput = todoForm.querySelector('input');
const todoList = document.getElementById('todo-list');

function deleteTodo(e) {
  const li = e.target.parentNode;
  li.remove();
}

function handleTodoSubmit(e) {
  e.preventDefault();

  const newTodo = todoInput.value;
  const li = document.createElement('li');
  const span = document.createElement('span');
  span.innerHTML = newTodo;

  const button = document.createElement('button');
  button.innerText = '❌';
  button.addEventListener('click', deleteTodo);

  li.appendChild(span);
  li.appendChild(button);
  todoList.appendChild(li);
  todoInput.value = '';
}

todoForm.addEventListener('submit', handleTodoSubmit);
