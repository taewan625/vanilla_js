const clock = document.querySelector("h2#clock");

function getClock() {
  const date = new Date(); // date object는 내가 호출하는 당시의 현재 날짜랑 시간을 알려줌
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `${hours}:${minutes}:${seconds}`;
}
getClock();
setInterval(getClock, 1000); // 실시간으로 보여주는 것

// console에 typeof Date;를 입력해보시면 function 이라고 알려줍니다.
// JavaScript에는 생성자 함수라는 것이 있는데요.

// new 를 선두에 쓰고 생성자 함수를 호출하면 instance object를 반환합니다.
// 이는 생성자 함수로 객체를 생성할 때 하기로 한 약속(문법)입니다.
// 생성자 함수는 arguments를 받을 수 있습니다.
// console const date = new Date();를 입력하여 date 변수를 선언하시고,

// type of date; 를 입력해보시면 object를 반환하는 것을 볼 수 있습니다.
// 이렇게 생성한 date 객체를 우리는 이전시간에 배웠던대로 object.property 와 같은 형식으로 사용할 수 있습니다.

// 이는 Python의 Class와 유사하며, 더 궁금한 것이 있으시다면 구글에 생성자 함수 (with JavaScript)에 대해 검색해보시기 바랍니다.
