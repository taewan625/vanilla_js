const images = [
  "0bff0c8c3ff9a412b78ffe1d9a97d819f520cbea1685a29bbff60367f571137f.jpg",
  "0fc682956559614671c644c300cc20cdd96c8dd703a7fe36efc67be9a8c0bf8e.jpg",
  "1a810f7ee0ec4e465e1262f7b9c5b2feed8ea596863ed4cb8630ba0c524bd8b1.JPG",
  "1bb8e099ff599a467f1836b54076dc1271b94f065f443b29db92778977f11077.jpg",
  "2d8fb4e8f96f818445ae854e03441baa5ddb483f8670a110552ff4b98ef7293b.jpg",
];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const randomBgImage = document.createElement("img");
randomBgImage.src = `img/${chosenImage}`;

// console.log(randomBgImage);

document.body.appendChild(randomBgImage);
// prepend는 img를 body에서 제일 위로 올려주는 역할
