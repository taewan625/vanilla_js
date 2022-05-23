// 무엇이 NaN인지 판별하는 방법

const age = parseInt(prompt("How old are you?"));
// console.log(isNaN(age));
//isNaN: number가 아니면 boolean으로 표시해주는 function -> inst :false string : true

// if(condition){
//   // condition == true
// } else{
//   // condition == false
// }
// // condition은 boolean으로 판별되야한다  else는 없어도 된다
if (isNaN(age)) {
  console.log("Please write a number");
} else {
  console.log("Thanks for writing your age");
}
