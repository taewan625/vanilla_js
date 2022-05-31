// 앞의 강의에서 하는 방식으로 JS를 style하는 방식은 가능하지만 스마트하지 않다
// style에 적합한 방식은 CSS 이고 JS에 적합한 방식은 animation이다.

const h1 = document.querySelector(".hello h1");

// function handleh1Click() {
//   h1.className = "active";
// }
// // h1 html에 보면 active란 class가 없지만 JS를 이용해서 위의 function을 이용해서 JS와 css를 연결함
// // 그래서 console 창에서 보면 h1 class=active가 나오고 css 에서 .active는 color를 tomato로 바꾸는 역할을 해줌

function handleh1Click() {
  const clickedClass = "clicked font"; // font의 class를 추가해주는 것도 그렇게 좋은 방법은 아니다
  if (h1.className === clickedClass) {
    h1.className = "";
  } else {
    h1.className = clickedClass;
  }
  // clicked라는 string을 2번 사용하므로써 오류를 범할 가능성이 증가한다 -> 왜냐면 clickedfmf clikced로 철자 틀리고 css class 명을 바꿀 때 또 일일히 바꿔주면 실수 가능성이 높음
  //
}
h1.addEventListener("click", handleh1Click);

// 하지만 이 방법은 css h1 안에 다른 class를 넣을 때 그것들을 다 없애버리는 문제점이 있음
