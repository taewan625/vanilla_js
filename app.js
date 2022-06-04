const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

// 반복되는 string의 오타는 JS가 error를 나타내지 않지만 변수명에 오타가 나면 JS는 error를 잡아줌
const HIDDEN_CLASSNAME = "hidden";
// 참고로 이때 hidden이 class 인데도 그냥 query를 사용하지 않아도 잘 작동됨
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;

  localStorage.setItem(USERNAME_KEY, username);
  // greeting.innerText = `hello ${username}`;
  // greeting.classList.remove(HIDDEN_CLASSNAME);
  keepGreetingsPage(username);
}

// greeting이 반복되므로 function을 만들 것임
function keepGreetingsPage(argumentUsername) {
  greeting.innerText = `hello ${argumentUsername}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

// getItem을 하였을 때 값이 없을 때의 value를 확인하가 위한 작업 = null
const localStorageUserName = localStorage.getItem(USERNAME_KEY);
// console.log(localStorageUserName);

if (localStorageUserName === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
  // 이동함. if 조건을 충족할 때 위의 event와 function을 진행하기 위함
} else {
  // greeting.innerText = `hello ${localStorageUserName}`;
  // // username을 하지 않는 이유는 먼저 form에 username을 작성하고 Value로 저장된
  // //username을 사용해야 하므로 그에 맞는 변수인 localStorageUserName을 사용하는 것이 맞다
  // greeting.classList.remove(HIDDEN_CLASSNAME);
  keepGreetingsPage(localStorageUserName);
}
