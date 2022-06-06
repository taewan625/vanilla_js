// setTimer
const clock = document.querySelector("#clock");

function sayHello() {
  console.log("hello");
}

setTimeout(sayHello, 3000);
// setInterval과 다른 점은 바로 function이 작동하지 않고 지정한 시긴을 지난 후 작동
