const h1 = document.querySelector(".hello h1");

// Console 창에서 h1의 style의 color를 확인하는 방법
// function handleh1Click() {
//   console.log(h1.style.color); // 함수안의 내용은 h1에 관한 것
//   h1.style.color = "blue";
//   console.log(h1.style.color);
// }

// function handleh1Click() {
//   if (h1.style.color === "blue") {
//     // === 동일한지 알아보는 것
//     h1.style.color = "tomato";
//   } else {
//     h1.style.color = "blue"; // css와 달리 JS는 함수안의 값이 존재하는 element가 아닌 이상 ""을 이용하는 것 같다
//   }
// }

function handleh1Click() {
  const currentColor = h1.style.color;
  let newColor; // 안에 값이 존재하지 않게 하므로 이 상태로 닫음
  if (currentColor === "blue") {
    newColor = "tomato";
  } else {
    newColor = "blue";
  }
  h1.style.color = newColor; // newColor라는 것은 값을 가지는 element같은 거라 ""없이 사용이 가능한 것 같음
}
// 해석 : 시작은 black color 이므로 h1.style.color = black이 되고 black은 else로 넘어가서 newColor="blue" 작동시킴 그리고 마지막으로 원래 newColor="blue"에서는 아무러 작동이 없음
// 왜냐면 newColor라는 애가 아무런 html 요소들과 연결이 되어있지 않기 때문 하지만 h1.style.color = newColor; 덕분에 color의 변화가 생김
h1.addEventListener("click", handleh1Click);

// 원래 JS로 css 속성 바꾸는 것은 나중에 사람 헷갈리게 해서 비추천
// HTML은 HTML 자체로 변화하는 방법이 없어서 어쩔수 없이 JS를 이용해야 함
// 1. element를 찾아라  2. event를 listen 하라 3. event에 반응(보여주기 감추기 색 바꾸기)해라
