// user의 geolocation을 준다
function onGeoSucess(position) {
  // coords.latitude는 console 창에서 보면 나옴 // 얘들이 object이기 때문에 차근차근 들어가져야함
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;
  console.log("you live in", lat, lng);
}
function onGeoError() {
  alert("cant find location. No weather for you");
}

navigator.geolocation.getCurrentPosition(onGeoSucess, onGeoError);
// browser에서 위치 좌표를 줄 것 // 2개의 agument를 가지는데 1) 성공시 2) 실패시

// api 계정을 만들어야 함 openweathermap.org -> api 이용
