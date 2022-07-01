// 완전 진짜루 정말로! paintToDO에서 어떤 일이 일어나는지 이해해야 돼!
const toDoForm = document.getElementById("todo-form");
const toDoList = document.getElementById("todo-list");
const toDoInput = document.querySelector("#todo-form input");

const TODOS_KEY = "todos";

let toDos = [];
function saveToDos() {
  localStorage.setItem("todos", JSON.stringify(toDos));
}
function deleteTodo(event) {
  const li = event.target.parentElement;
  console.log(li.id);
}

function paintToDo(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id;
  const span = document.createElement("span");
  span.innerText = newTodo.text;
  const button = document.createElement("button");
  button.innerText = "✔";
  button.addEventListener("click", deleteTodo);
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  toDos.push(newTodoObj);
  paintToDo(newTodoObj);
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);
if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
  // forEach는 paintToDo를 기본적으로 실행한다. 그리고 각각의 item을 주는데 이제 이 item은 object가 된다.
}

// .filer라는 함수를 이용하여 기본적으로 가진 array에서 noneeditem을 제외하고 새 array를 만드는 것. true를 default 값으로 true인 값들만 가져간다.
// exemple
// const arr = [1, 2, 3, 4, 5]
// function sexyFunction(potato) {return potato <= 3}  // (anything ok, just meaning about arr's array)
// arr.filter(sexyFunction)
// [1, 2, 3]
