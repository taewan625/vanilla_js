const toDoForm = document.getElementById("todo-form");
const toDoList = document.getElementById("todo-list");
const toDoInput = document.querySelector("#todo-form input"); // = toDoForm.querySelector("input");

function paintToDo(newTodo) {
  // 2) 아래 function인 newTodo에서 저장한 value를 이용해서 function을 수행하고
  // console.log("i will paint", newTodo); // 잘 작동하는지 확인용
  const li = document.createElement("li"); // 변수명은 굳이 html li로 할 필요는 없지만 createElement는 li(html tag)로 필히 나타내야함
  const span = document.createElement("span"); // todo list 이므로 span 안에 li를 넣고 그안 span에 리스트를 넣고 button도 만들어서 지우는 역할도 수행할 것
  li.appendChild(span); // 단계별로보면 toDoInput > li > span = newTodo
  span.innerText = newTodo;
  // console.log(li); // 확인용
  toDoList.appendChild(li); // 이걸로 ul 안에 li 만들어 넣어서 계속 나올수 있게 함
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  paintToDo(newTodo); // 1) 실제로 paintToDo function을 수행하기 위한 코드
}

toDoForm.addEventListener("submit", handleToDoSubmit);
