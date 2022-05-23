// === 와 == 차이
// === : 유형까지 꼼꼼히 따짐 == : 비슷하게 생기면 상관 없음 True == 1  False == 0 의 default 값을 가짐
// https://developer-talk.tistory.com/184
const age = parseInt(prompt("How old are you?"));

if (isNaN(age) || age < 0) {
  console.log("Please write a real posotive number");
} else if (age < 18) {
  console.log("Please get out");
} else if (age >= 18 && age <= 50) {
  console.log("Welcome to bar");
} else if (age > 50 && age <= 80) {
  console.log("You can drink but careful");
} else if (age === 100) {
  console.log("wow you are wise");
  // 아닐 때는 !==로 표현
} else if (age > 80) {
  console.log("You can do whatever you want");
}
