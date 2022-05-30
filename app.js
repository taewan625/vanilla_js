const h1 = document.querySelector(".hello h1");

function handleh1Click() {
  h1.style.color = "blue";
}

function handleMouseEnter() {
  h1.innerText = "Mouse is here";
}

function handleMouseLeave() {
  h1.innerText = "Mouse is gone!";
}

function handleWindowResize() {
  document.body.style.backgroundColor = "tomato";
  // document는 html을 뜻함. 그래서 나중에 document.title을 하면 h1의 내용이 아니라 head의 title을 가리키므로 title을 h1을 변경함
  // body, head, title은 중요하기 때문에 document.title 는 가능하지만 다른 element들은 1줄 처럼 querySelector를 이용하거나 getElementById를 이용해야함
}

function handleWindowCopy() {
  alert("coper!!");
}

function handleWindowOffline() {
  alert("404Error_noWifi");
}

function handleWindowOnline() {
  alert("connectedWifi");
}
// h1.addEventListener 은 나중에 h1.removeEventListener로 제거 가능해서 추천
h1.addEventListener("click", handleh1Click); // smae : h1.onclick = handleh1Click;
h1.addEventListener("mouseenter", handleMouseEnter);
h1.addEventListener("mouseleave", handleMouseLeave);

// window 관련 event들
window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);
