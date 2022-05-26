// // 앞에서의 class는 모두 가져오는 것이고 이번에는 class중 원하는 것만 가져오는 것
// const title = document.getElementsByTagName("h1"); //TagName: anchor,div,section,button 등등
// console.log(title);

// 이걸로도 부족함 -> 얘도 array이기 때문에 title.###로 해서 할 수 없어서

const title = document.querySelector(".hello h1"); // querySelector는 element를 CSS 방식으로 검색할 수 있다
//css selector 여서 class인 것을 .으로 표현 하고 .hello 안에 h1이 들어있음을 표현
// css 형식이라서 const title = document.querySelector("div h1"); 이렇게도 가능
// querySelector은 단 하나의 element를 return해줌
console.log(title);
// html에 여러개의 div class h1 을 넣고 console 창에 돌리면 array와 element 중에서 element 방식으로 나옴
// 하지만 querySelector은 1개만 가져오므로 querySelectorAll을 사용해야함
title.innerText = "hello";

// 요약

// - getElementsByClassName() : 많은 element를 가져올때 씀(array를 반환)
// - getElementsByTagName() : name을 할당할 수 있음(array를 반환)
// - querySelector : element를 CSS selector방식으로 검색할 수 있음 (ex. h1:first-child)
// 단 하나의 element를 return해줌
// ⇒ hello란 class 내부에 있는 h1을 가지고 올 수 있다(id도 가능함)
// - 첫번째 element만 가져옴
// - 조건에 맞는 세개 다 가져오고 싶으면 querySelectorAll
// ⇒ 세개의 h1이 들어있는 array를 가져다 줌
// - querySelector("#hello); 와 getElementById("hello"); 는 같은 일을 하는 것임
// 하지만 후자는 하위요소 가져오는 것을 못하므로 전자만 쓸거다
