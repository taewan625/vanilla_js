const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

// 현재 keepGreetingPage의 argument들이 하나는 loginInput.value에서 오고 다른 하나는 localStorage에서 오고 있다
// 그래서 keepGreetingsPage(username); keepGreetingsPage(localStorageUserName); 이렇게 2개로 나눠 써야 한다.
// 헷갈리니깐 하나로 통일하자

// keepGreetingsPage(argument)는 argument를 따로 받을 필요가 없다. 왜냐면 이미 localStorage.getItem 으로 username을 이미 받았기 때문

function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  // const username = loginInput.value; // keepGreetings 인자 오는 위치 2
  // localStorage.setItem(USERNAME_KEY, username); user 라는 이름으로 가져오는게 아니라 loginInput.value로 바로 가져올것임
  localStorage.setItem(USERNAME_KEY, loginInput.value);
  // keepGreetingsPage(username);
  keepGreetingsPage(); //argument 받을 필요 없어서 지움
}

// function keepGreetingsPage(argumentUsername) {
function keepGreetingsPage() {
  //argument 받을 필요 없어서 지움
  const argumentUsername = localStorage.getItem(USERNAME_KEY); // 아래 `hello ${argumentUsername}`로 값을 받으니깐 변수 명을 argumentUsername로 해야함
  greeting.innerText = `hello ${argumentUsername}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

const localStorageUserName = localStorage.getItem(USERNAME_KEY); // keepGreetings 인자 오는 위치 1

if (localStorageUserName === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  // keepGreetingsPage(localStorageUserName);
  keepGreetingsPage(); //argument 받을 필요 없어서 지움
}
