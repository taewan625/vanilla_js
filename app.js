const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");

const link = document.querySelector("a");

function onLoginSubmit(event) {
  event.preventDefault(); // 어떤 function에 대해 browser가 기본적으로 수행하는 동작 을 하지 않도록 막아주는 역할
  // 받은 정보
  // console.log(event);
  //   SubmitEvent {isTrusted: true, submitter: input, type: 'submit', target: form#login-form, currentTarget: form#login-form, …}
  // isTrusted: true
  // bubbles: true
  // cancelBubble: false
  // cancelable: true
  // composed: false
  // currentTarget: null
  // defaultPrevented: true
  // eventPhase: 0
  // path: (5) [form#login-form, body, html, document, Window]
  // returnValue: false
  // srcElement: form#login-form
  // submitter: input
  // target: form#login-form
  // timeStamp: 1823.1000000238419
  // type: "submit"
  // [[Prototype]]: SubmitEvent
  console.log(loginInput.value);
}

function handleLinkClick(event) {
  event.preventDefault();
  console.dir(event);
  // console.log(event);
  // // 받은 정보
  // // PointerEvent {isTrusted: true, pointerId: 1, width: 1, height: 1, pressure: 0, …}
  // alert("clicked");
}

loginForm.addEventListener("submit", onLoginSubmit);
link.addEventListener("click", handleLinkClick);

// EventListener에서 handleLinkClick이란 함수만 실행하는 것이 아니라 함수 실행 명령어인 () 안에 argument를 {object} 를 받게 되면서
//  이 object가 방금 일어난 event에 대한 여러 정보를 나타내준다.
// handleLinkClick({information about the event that just happened})
