// console.name() : name은 ()가 불가능. function이 아니기 때문
// console.log()  ; 얘는 ()가 가능하다. log가 function이기 때문

//  function ; 계속 반복해서 사용할 수 있는 코드 조각이라고 생각하면 된다

// function이 없으면 이렇게...
// console.log("Hello my name is a");
// console.log("Hello my name is b");
// console.log("Hello my name is c");
// console.log("Hello my name is d");
// console.log("Hello my name is e");

//function 이용
// function + function name + () + { 여기에 반복하고 싶은 것 넣음 ; }
// argument : function을 실행하는 동안 어떤 정보를 function에게 보낼 수 있는 방법
//
function sayHello() {
  console.log("Hello my name is c");
}
sayHello("a");

// 현재 function을 만들고 이를 출력하는 것까지는 알고 있다. 하지만 function의 c라는 부분에 원하는 data를 바꾸는 법을 알아야 한다 = argument(인수)를 보내는 것
