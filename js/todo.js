const toDoForm = document.getElementById("todo-form");
const toDoList = document.getElementById("todo-list");
const toDoInput = document.querySelector("#todo-form input"); // = toDoForm.querySelector("input");

// 먼저 todolist의 값들을 localStorage에 저장하고 새로고침 후 localStorage에서 저장한 값들을 불러와서 화면에 나타나게 하는 것

const toDos = [];
// browser에 저장하기 위한 localStorage를 이용하기전 array를 이용하는 방법
// 하지만 이것은 localStorage에 들어가면 array로 표현이 안됨

function saveToDos() {
  // localStorage.setItem("todos", toDos); // 아직까지는 text로 저장되고 array로 저장이 안됨

  localStorage.setItem("todos", JSON.stringify(toDos));
  // JSON.stringify() : browser의 기본 기능인데 이는 모든 것을 string으로 바꾸어줌
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
  // paintToDo(newTodo) 하기전에 toDos에 push를 먼저 하고 싶은 것임

  paintToDo(newTodo);
  saveToDos(); // 이 값을 넣어주고 나면 function saveToDos가 값을 저장하는데
}

toDoForm.addEventListener("submit", handleToDoSubmit);

// 왜 json.stringify 함수를 쓰나 했는데 나중에 json.parse 함수를 쓰더라구요
// (STRINGIFY = 변수 등을 문자열로 바꿈,PARSE = 문자열을 JSON으로 바꿈)
// localstorage 에서는 문자열밖에 저장할 수 있기 때문에
// stringify로 Array 자체를 문자열로 만들고 (["뭐시기","저시기"] ==> "["뭐시기","저시기"]")
// 나중에 localstorage에서 가지고 온 다음 parse로 문자열을 Array 로 만들어서
// 불러들이는 걸로 하는거 같아요
// 이상 뒷강의를 보지 않고 추측해본 뇌피셜
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse
