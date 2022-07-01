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
  li.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id)); // 그래서 수치형으로 변경해 준다
  // toDo는 toDos DB에 있는 요소 중 하나. toDo.id는 ;li.id에서 click 되지 않은 것이여야 한다
  // 그리고 li.id가 string으로 나오는 이유

  // 원인은 paintToDo 함수 내에 있는
  // const li = document.createElement("li");
  // li.id = newTodo.id;
  //  이 부분 때문

  // li는 DOM을 직접 건드린건데, mdn 문서 뒤져보니 DOM의 id는 문자열이라고 나옴
  // 우리가 newTodo.id로 number를 넣어주었어도, DOM에선 string으로 형변환해서 받아들임
  // mdn 문서 링크 공유 https://developer.mozilla.org/ko/docs/Web/API/Document/getElementById  // 매개변수 id 부분 보시면 설명 나옴
  saveToDos(); // 이거 까지 해야지 delete 한 형식대로 저장을 해줌
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
}
