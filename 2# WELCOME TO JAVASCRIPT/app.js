// 우리의 data를 function에 보내는 법

// argunemt : 입력한 값 그대로 출력하기 위한 변수명,
// function sayhello(argumentName) { }
// console.log(argumentName)
// sayHello("a"),sayHello("b") 를 넣는 방식
function sayHello(nameOfPerson, age) {
  // argument는 ,로 여러개 나열이 가능
  // console.log(nameOfPerson, age);
  console.log("Hello my name is ", nameOfPerson, " and I'm" + age); // + , 둘다 사용 가능
}
sayHello("a", 10);
sayHello("b", 20);
sayHello("c", 30);

// 현재 function을 만들고 이를 출력하는 것까지는 알고 있다. 하지만 function의 c라는 부분에 원하는 data를 바꾸는 법을 알아야 한다 = argument(인수)를 보내는 것

// practice
function plus(a, b) {
  console.log(a + b);
}
plus(1, 2);
// plus의 1과 2는 function의 a,b로 들어가고 이것이 console.log 속으로 들어가서 계산을 진행

function divide(c, d) {
  console.log(c / d);
}
divide(3, 2);

//심화
// 처음에 console.log()의 ()안에 변수를 넣어 출력을 하듯 sayHello1을 function으로 만들어서 ()를 사용할 수 있도록 할 것임
const player = {
  name: "taewan",
  // 여기서 함수는 function sayHello1 이런식으로 안하고 바로 sayHello!로 시작함
  sayHello1: function (otherPersonsName) {
    console.log("hello " + otherPersonsName + " nice to meet you");
  },
};

console.log(player.name); // 얘는 원래 함수라서 ()안에 값을 넣을 수 있음을 의미
player.sayHello1("JE"); // 얘도 내가 함수로 만들어서 ()안에 값을 넣을 수 있음
player.sayHello1("taewan");
