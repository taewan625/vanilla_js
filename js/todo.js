const toDoForm = document.getElementById("todo-form");
const toDoList = document.getElementById("todo-list");
const toDoInput = document.querySelector("#todo-form input");

const TODOS_KEY = "todos";

// const toDos = []; // 이게 비어있어서 todolist에 무엇인가를 넣을 때 항상 reset이 됨
let toDos = []; // 1) 그래서 let으로 바꾸고
function saveToDos() {
  localStorage.setItem("todos", JSON.stringify(toDos));
}
function deleteTodo(event) {
  const li = event.target.parentElement;
  li.remove();
}

function paintToDo(newTodo) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.innerText = newTodo;
  const button = document.createElement("button");
  button.innerText = "✔";
  button.addEventListener("click", deleteTodo);
  li.appendChild(span); // 단계별로보면 toDoInput > li > span = newTodo
  li.appendChild(button);
  toDoList.appendChild(li); // 이걸로 ul 안에 li 만들어 넣어서 계속 나올수 있게 함
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  toDos.push(newTodo);
  paintToDo(newTodo);
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);
if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos; // 2) let으로 만든 변수는 이 코드를 통해서 update 되고 이제 todolist를 덮어쓰기가 가능해 진다
  parsedToDos.forEach(paintToDo); // browser에 넣기만 하면 되는 거여서 paintToDO만 호출하면 된다.
}
