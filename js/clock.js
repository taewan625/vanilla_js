// Instance methods
// new Date()
// Mon Jun 06 2022 17:36:34 GMT+0900 (한국 표준시)

//
// undefined

// const date = new Date();  이렇게 변수명을 지정해주는 것이 중요
// undefined

// date.getDate()
// 6

// date.getDay()
// 1

const clock = document.querySelector("h2#clock");

function getClock() {
  const date = new Date();
  // console.log(`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);
  clock.innerText = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`; // html 로 나오게 clock(#id)의 innerText 이용
}

getClock(); // reload 시 1초 안기다리고 바로 나오게 하려고 넣음
setInterval(getClock, 1000);
