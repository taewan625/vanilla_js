const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting"); // html h1 안에 greeting이란 id 넣고 변수 만듬

const HIDDEN_CLASSNAME = "hidden"; // 대문자로 하게 변수명을 지정하는 것은 관습적인 것, 그리고 별 중요하지 않은 것을 나타날때 사용

function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME); // hidden이란 class name을 더해줘서 form을 숨김
  const username = loginInput.value; // user이름을 변수로 저장해서 그 이름을 h1 안에 넣을 것임

  localStorage.setItem("username", username);
  // greeting.innerText = "hello" + username;
  greeting.innerText = `hello ${username}`; // 둘다 변수를 string 안에서 사용할 수 있게 해줌

  greeting.classList.remove(HIDDEN_CLASSNAME);
}

loginForm.addEventListener("submit", onLoginSubmit);
