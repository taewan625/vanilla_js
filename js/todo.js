const toDoForm = document.getElementById("todo-form");
const toDoList = document.getElementById("todo-list");
const toDoInput = document.querySelector("#todo-form input");

const TODOS_KEY = "todos"; // provide from mistake

const toDos = [];

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

// function sayHello(item) {
//   // () 안에 아무것도 없으면 어떤 array에 작동했는지 확인이 안됨 그래서 넣어줌
//   // item or element 로 이름은 정하기 나름
//   console.log("각각 function이 작동을 하는지 확인", item);
// }

const savedToDos = localStorage.getItem(TODOS_KEY);
// console.log(savedToDos); 이건 string으로 나오는 todos
if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  // console.log(parsedToDos); 이건 array로 나오는 것 -> JS는 array에 있는 각각의 items에 대한 function을 실행 시켜줌
  // parsedToDos.forEach(sayHello); // forEach는 array에 있는 각각의 item에 대해서 실행시켜줌
  parsedToDos.forEach((item) =>
    console.log("각각 function이 작동을 하는지 확인", item)
  );
  // function sayHello(item) 이랑 같은 것임. 아무거나 쓰면 됨 이것은 짧게 쓸수있고 기능적으로  function이랑 같아서 좋은것 같음
}

// JSON.parse() : string -> object로 변화시켜주는 것

// JSON.stringify([1,2,3,4])
// '[1,2,3,4]'
// JSON.parse('[1,2,3,4]')
// (4) [1, 2, 3, 4]
// 0: 1
// 1: 2
// 2: 3
// 3: 4
// length: 4
// [[Prototype]]: Array(0)

// 그래서 이제 우리가 필요로 하는 todo list를 array로 변화 해볼것임

// 원래 이렇게 나오는 것을
// localStorage.getItem("todos")
// '["a","b","n","b"]'

//  JSON.parse를 이용해서 array로 변경시킴
// JSON.parse(localStorage.getItem("todos"))
// (4) ['a', 'b', 'n', 'b']
