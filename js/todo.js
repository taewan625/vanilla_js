const toDoForm = document.getElementById("todo-form");
const toDoList = document.getElementById("todo-list");

const toDoInput = document.querySelector("#todo-form input"); // = toDoForm.querySelector("input");

function handleToDoSubmit(event) {
  event.preventDefault();
  // console.log(toDoInput.value);
  const newTodo = toDoInput.value; // input 내용이 비워지기전에 값을 저장해주는 역할
  toDoInput.value = ""; // input에 무엇인가를 넣었을 때 다시 비워주는 역할
}

toDoForm.addEventListener("submit", handleToDoSubmit);
