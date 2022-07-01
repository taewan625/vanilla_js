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
  console.log(li.id); // delete하기 전에 id 값을 얻기 위함 보여주는 것
  li.remove();
}

function paintToDo(newTodo) {
  // function paintToDo()안에 newTodoObj 이 아닌 newTodo 그대로 쓰는 이유
  // paintToDo 함수는 newTodo 라는 이름의 인수의 값으로 newTodoObj 라는 object를 받고있기 때문 * function 부분 강의 더 들어야 함
  const li = document.createElement("li");
  li.id = newTodo.id; // 이 또한 html에 id를 넣을 때 newTodoObj.id를 안쓰는 이유는 위와 같이 함수 안에서 newTodo.id를 쓰고있기 때문
  // browser element를 보면 ul란에 아쁘게 id랑 text 들어감
  const span = document.createElement("span");
  span.innerText = newTodo.text;
  // span 안에 그냥 newTodo가 있었던게 이제는 object 안에 text와 id가 존재하게 되므로 newTodo -> newTodo.text로 정확히 지정해야함
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
    // newTodo로 text가 아닌 object로 저장하기 위해 새로운 variable을 이용
    // 그리고 새 object를 push에다가 push할것임
  };
  toDos.push(newTodoObj); // 매번 사용자가 적어둔 text를 push 한다.
  // 여기에 object로 바꾼 id까지 포함된 array를 넣을 것임
  paintToDo(newTodoObj);
  // html에도 id를 넣고 싶어서 newTodoObj를 넣어줌 -> 이때 내용이 object Object로 바뀌는 문제가 생김 -> 그래서 paintToDo로 가서 문제를 해결해야함
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);
if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}

// local storage는 database가 아니다. console에서 toDos array를 볼 때 나오는 값이 database이다
// local storage는 이 toDos array를 복사해두는 곳이다

// todolist에서 무엇을 지울지 모르니깐 id를 넣어줄 것이다.
// 그래서 Date.now() 함수를 이용하는데 이는 1000분의 1초를 주는 함수이다. 거의 random하게 보인다.

// JavaScript는 객체기반의 스크립트 언어이며 JavaScript를 이루고 있는 거의 모든 것은 객체이다.
// 객체란 여러 속성을 하나의 변수에 저장할 수 있도록 해주는 데이터 타입으로 Key / Value Pair를 저장할 수 있는 구조이다.
// https://velog.io/@surim014/%EC%9B%B9%EC%9D%84-%EC%9B%80%EC%A7%81%EC%9D%B4%EB%8A%94-%EA%B7%BC%EC%9C%A1-JavaScript%EB%9E%80-%EB%AC%B4%EC%97%87%EC%9D%B8%EA%B0%80-part-7-Object-35k01xmdfp
