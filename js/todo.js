const toDoForm = document.getElementById("todo-form");
const toDoList = document.getElementById("todo-list");
const toDoInput = document.querySelector("#todo-form input"); // = toDoForm.querySelector("input");
function deleteTodo(event) {
  // event가 없이 console.log를 통해서 확인하였을 때 어느 것을 눌렀는지 확인이 불가능
  // console.dir(event.target.parentElement.innerText); // console 창을 통해서 event.target을 이용하기로 함
  const li = event.target.parentElement; // 내가 click한 li의 todolist가 무엇인지 알고 이를 li 변수로 지정함 - 이제 delete할 것을 명확히 지정 가능
  li.remove();
}
function paintToDo(newTodo) {
  // 2) 아래 function인 newTodo에서 저장한 value를 이용해서 function을 수행하고
  // console.log("i will paint", newTodo); // 잘 작동하는지 확인용
  const li = document.createElement("li"); // 변수명은 굳이 html li로 할 필요는 없지만 createElement는 li(html tag)로 필히 나타내야함
  const span = document.createElement("span"); // todo list 이므로 span 안에 li를 넣고 그안 span에 리스트를 넣고 button도 만들어서 지우는 역할도 수행할 것
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
  paintToDo(newTodo); // 1) 실제로 paintToDo function을 수행하기 위한 코드
}

toDoForm.addEventListener("submit", handleToDoSubmit);
