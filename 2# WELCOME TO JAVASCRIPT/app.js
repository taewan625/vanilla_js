// else if : else + if 개념 -> if가 false일때 한가지 condition을 더 추가 가능

const age = parseInt(prompt("How old are you?"));

// // 1st 방법
// if (isNaN(age)) {
//   console.log("Please write a number");
// } else if (age < 18) {
//   console.log("You are too young");
// } else if (age > 80) {
//   // else if 중에서도 80이 넘을 때의 true false
//   console.log("You are too old");
// } else {
//   console.log("now you can drink");
// }

// 2nd 방법
if (isNaN(age) || age < 0) {
  console.log("Please write a real posotive number");
  // || : or 의 의미로 2중 1가지만 true여도 true로 적용이 되어서 "Please write a real posotive number" 적용 가능
} else if (age < 18) {
  console.log("Please get out");
} else if (age >= 18 && age <= 50) {
  // && : and의 의미 2가지 조건이 다 true 일때만 welcome to bar 가 적용이 된다
  console.log("Welcome to bar");
} else if (age > 50 && age <= 80) {
  console.log("You can drink but careful");
} else if (age > 80) {
  console.log("You can do whatever you want");
} else if (age === 100) {
  console.log("wow you are wise");
  // age >80 의 값 때문에 실행이 되지 않음 그래서 위로 올려야함
}
// else의 값중에서도 if 조건에 맞는 것이면 You are too young 나오고
// else if 중에 false인 값은 그 밑의 else의 내용으로 넘어가게 된다

// 요약 if -> else if(if의 false 중에서 t,f 분류) -> else if (처음의 else if 조건 중 f인 애들중에서 t,f 분류 -> 같은 방식으로 else if 반복 가능 -> 마무리는 else
