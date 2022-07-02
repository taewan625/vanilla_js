function onGeoSucess(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  // console.log("you live in", lat, lon);
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`; // 벡틱 이용!!
  // console.log(url);
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      // console.log(data.name, data.weather[0].main); // 이걸로 먼저 값이 잘 나오는지 확인
      const city = document.querySelector("#weather span:last-child");
      const weather = document.querySelector("#weather span:first-child");
      // const name = data.name; // browser에 넣어야 하니깐 밑에껄로 바꿈
      city.innerText = data.name;
      // const weather = data.weather[0].main; // 이걸 browser에 넣어야 하므로 html로 이용
      weather.innerText = data.weather[0].main;
    }); // F12에서 network창에서 JS가 url로 요청을 하였다
}
function onGeoError() {
  alert("cant find location. No weather for you");
}

navigator.geolocation.getCurrentPosition(onGeoSucess, onGeoError);

// api에 관한 youtube 영상 존재
// openweathermap 이용법
// 상단 API -> Current weather data API doc -> https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key} code 이용
// 주소창 코드에 {lat} {lon} 에 진짜 수치 넣고 {API key}에 내 profile에서 default key 넣어주면 일반 browser 창에서 weather 결과값이 나옴

// API KEY 를 전역변수로 두어서 개인 정보는 나타나지 않게 js 이용하는 법
// 첫번째 JS에서 내 정보를 넣고 [const API_KEY = "####"]  다른 js에서[weather JS] 이용하려면 index.html에 <script src="js/key.js"></script>를 넣어주기만 하면된다.
// JS 전역변수를 사용하는 방법 https://stackoverflow.com/questions/41255861/how-to-pass-variable-from-one-javascript-to-another-javascript-file
