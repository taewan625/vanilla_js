const a = 6;
const b = 5;
let myName = "taewan";

// JS에는 variable을 만드는 방법이 let 과 constant 2개 존재
//l let과 constant 차이점 : constant는 상수이고 값이 바뀔 수 없다

// variable 값을 바꾸고 싶은 경우 : let 을 이용하는 것인데 let은 처음에만 variable을 지정해주면 다시 쓸 필요 없다

console.log(a * b);
console.log(a + b);
console.log(a / b);

console.log("hello my name is", myName);

myName = "kwon taewan";
console.log("hello my new name is", myName);

// 처음 myname의 값이 let을 사용하지 않고 constant 를 이용하면 다음에 update 시 error가 생김

// JS에서의 장점은 const 와 let이 존재하여 값이 update 되는지 아닌지 확인할 수 있는 장점이 있고
// 보통 constant 를 사용하다가 필요시 let을 사용한다

// JS는 너무 대충 만든거라 update가 안되고 계속 보완하는 형식으로 진행이 된다. 그래서 const와 let 도 최근에 나온거고
// 옛날 JS 책에선 var이라고 가르치는데 이는 contant와 반대로 실수롤 값을 바꿔도 let 처럼 ok 하고 넘어간다.
// 그래서 JS는 최신 것을 계속 공부해야 따라갈수 있다
// var은 절대 쓰지 말 것
