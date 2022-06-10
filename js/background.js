const images = [
  "0bff0c8c3ff9a412b78ffe1d9a97d819f520cbea1685a29bbff60367f571137f.jpg",
  "0fc682956559614671c644c300cc20cdd96c8dd703a7fe36efc67be9a8c0bf8e.jpg",
  "1a810f7ee0ec4e465e1262f7b9c5b2feed8ea596863ed4cb8630ba0c524bd8b1.JPG",
  "1bb8e099ff599a467f1836b54076dc1271b94f065f443b29db92778977f11077.jpg",
  "2d8fb4e8f96f818445ae854e03441baa5ddb483f8670a110552ff4b98ef7293b.jpg",
];

const chosenImage = images[Math.floor(Math.random() * images.length)];

// console.log(chosenImage);

// JS에서 무엇인가를 생성해서 html에 추가하는 방법

const randomBgImage = document.createElement("img"); // JS에서 img를 만드는 과정
randomBgImage.src = `img/${chosenImage}`;
// 위의 코드는 img라는 tag를 만든 것이고 이제 나의 img를 넣을 것 src를 이용함

console.log(randomBgImage); // img를 만든 것을 확인하기 위함

document.body.appendChild(randomBgImage);
// 실제 html에는 img가 존재하지 않아서 만들어주는 과정

//  createElement와 appendChild 설명 : https://yelee.tistory.com/14
