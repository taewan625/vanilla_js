// 현재 하고 있는 것은 HTML를 찾는 것
// 1) div를 찾음
const loginForm = document.getElementById("login-form");
// const loginForm = document.querySelector("#login-form"); // querySelector은 모든 것을 다 끌고 오므로 #나 . 붙여줘야 함
// 2) input과 button 찾기
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");

// // 다른 방법
// const loginInput = document.querySelector("#login-form input")
// const loginButton = document.querySelector("login-form button")

function onLoginBtnClick() {
  console.log(loginInput.value); // console.dir(loginInput); -> 이것을 통해서 value라는 위치를 찾은 것임
  // console.log("clicked");
}
loginButton.addEventListener("click", onLoginBtnClick);
// console.dir로 loginInput 내부에 내가 친 내용들이 value라는 값을 가짐을 알 수 있다.
// 이는 html input 안에 value="###"" 하면 값이 선 입력됨을 의미하기도 한다.
