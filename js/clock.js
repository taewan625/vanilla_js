const clock = document.querySelector("h2#clock");

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0"); // new Date()값은 number로 나와서 string을 원하는 padStrart에 맞게 변형
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `${hours}:${minutes}:${seconds}`;
}
getClock();
setInterval(getClock, 1000);
// A.padStrat(a=string의 길이, "b") : 초가 01 02 이렇게 되도록 하는 function -> A가 a의 조건에 맞지 않으면 앞에 "b"를 붙인다
// padEnd는 뒤에 문자가 붙는 것
