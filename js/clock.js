// interval
// interval : 매번 일어나야 하는 무언가를 의미

const clock = document.querySelector("#clock");
// clock.innerText = "lalalalalal"; // 잘 작동하는지 확인용

function sayHello() {
  console.log("hello");
}

setInterval(sayHello, 5000); // 5000 = 5000ms =5s
// SetInterval은 interval을 실행할 수 있게 해주는 code로 2가지의 argument 가짐. 1) 실행하고자 하는 function 2) 몇 초마다 반복할 것인지(ms)기준
