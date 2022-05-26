// // 보통의 경우 id 보다 className을 사용한다
// const title = document.getElementById("titleeeeeeeeeeee");
// title.innerText = "Got you!!";
// console.log(title.className);

// // app.js:3 Uncaught TypeError: Cannot set properties of null (setting 'innerText')  at app.js:3:17
// // title이 존재하지 않으니 title의 내부의 innerText를 호출하지 마십시오

// // 사람들이 가장 많이 내는 에러. 여기서 null 이란 값이 나오는데 이는 title이 null이란 의미
// // 이는 const title = document.getElementById("titleeeeeeeeeeee"); 에서 titleeeeeeeeeeee를 가진 id가 없기 때문

// class를 이용하는 법 가르쳐 줄꺼임
const hellos = document.getElementsByClassName("hello"); // ()이 안의 className은 html className과 같아야 한다
console.log(hellos);

// HTMLCollection(5) [h1.hello, h1.hello, h1.hello, h1.hello, h1.hello]
// 0: h1.hello
// 1: h1.hello
// 2: h1.hello
// 3: h1.hello
// 4: h1.hello
// length: 5
// [[Prototype]]: HTMLCollection

// 이런 결과가 나옴
// h1의 값들은 array이기 때문에 hellos.## 로 가져올수 없다
