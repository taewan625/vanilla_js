const toDoForm = document.getElementById("todo-form");
const toDoList = document.getElementById("todo-list");

const toDoInput = document.querySelector("#todo-form input"); // = toDoForm.querySelector("input");

function handleToDoSubmit(event) {
  event.preventDefault();
  // console.log(toDoInput.value);
  const newTodo = toDoInput.value;
  toDoInput.value = "";
}

toDoForm.addEventListener("submit", handleToDoSubmit);
