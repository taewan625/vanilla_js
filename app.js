const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");

function onLoginSubmit(event) {
  //                   event= argument
  event.preventDefault(); // 어떤 function에 대해 browser가 기본적으로 수행하는 동작 을 하지 않도록 막아주는 역할
  // const username = loginInput.value;
  console.log(loginInput.value);
}

loginForm.addEventListener("submit", onLoginSubmit);

// browser 1st onLoginSubmit function 2nd event를 호출후 function을 진행할 때 (###########)를 넣고 진행을 함

// brower가 기본적으로 수행하는 동작으로 input의 submit에 관해서는 새로고침 기능이 있는데
// 이를 preventDefault()가 막아준다. 막아주므로써 JS가 우리에게 주는 정보를 console 창에서 확인을 할 수 있다.

// 요약
//
//
// function onLoginSubmit(event){
//   event.preventDefault(); // 브라우저가 기본 동작을 실행하지 못하게 막기 // event object는 preventDefault함수를 기본적으로 갖고 있음
//   console.log(event);
//   }

//   loginForm.addEventListener("submit", onLoginSubmit); // submit 이벤트가 발생한다면, onLoginSubmit함수를 실행시킨다는 의미 // JS는 onLoginSubmit함수 호출시 인자를 담아서 호출함. 해당 인자는 event object를 담은 정보들

//   ★ 중요 ★
//   form을 submit하면 브라우저는 기본적으로 페이지를 새로고침 하도록 되어있다. << 우리가 원하는 것이 아님!
//   preventDefault() 함수를 추가함으로써 브라우저의 기본 동작을 막을 수 있다!!

//   이 preventDefault 함수는 EventListener 함수의 '첫 번째 argument' 안에 있는 함수이다. 첫 arument는 지금 막 벌어진 event들에 대한 정보를 갖고 있다.
//   JS는(기본적으로)argument를 담아서 함수를 호출하는데, 이 argument가 기본 정보들을 제공하고 있다. ex) 누가 submit주체인지, 몇 시에 submit을 했는지 등등 콘솔에 출력해보면 알 수 있음
