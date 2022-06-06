const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  localStorage.setItem(USERNAME_KEY, loginInput.value);
  keepGreetingsPage();
}

function keepGreetingsPage() {
  const argumentUsername = localStorage.getItem(USERNAME_KEY);
  greeting.innerText = `hello ${argumentUsername}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

const localStorageUserName = localStorage.getItem(USERNAME_KEY);

if (localStorageUserName === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  keepGreetingsPage();
}
