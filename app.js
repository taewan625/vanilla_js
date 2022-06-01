// 이름을 입력해야 button을 누를 수 있게 하기
const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");

function onLoginBtnClick() {
  const username = loginInput.value; // loginInput.value 가 너무 길어서 value로 줄이는 것
  if (username === "") {
    alert("Please write your name");
  } else if (username.length > 15) {
    // .length : string의 길이 알아봐줌
    alert("Your name is too long");
  }
}
loginButton.addEventListener("click", onLoginBtnClick);
