// 1) JS에 HTML 가져오기
const title = document.querySelector(".hello h1");

// 3) event가 발생시 나타나는 function들
function handleTitleClick() {
  title.style.color = "blue";
  // console.log("title was clicked!");
}

function handleMouseEnter() {
  title.innerText = "Mouse is here";
}

function handleMouseLeave() {
  title.innerText = "Mouse is gone!";
}

// 2) event를 뭐할지 쓰기
title.addEventListener("click", handleTitleClick);
title.addEventListener("mouseenter", handleMouseEnter);
title.addEventListener("mouseleave", handleMouseLeave);

// listen 하고 싶은 event를 찾는 방법
// 1.
// h1 html element mdn  # 구글에 찾고 싶은 element 이름 searching
// 그리고 Web APIs | MDN 찾기 # JS 관점의 HTML heading element란 의미
//2.
console.dir(title); // 안에 element를 넣음
// 하고 cosole 창에서 내에서 property 중 on### 된것은 모두 event 이다.
// 사용할 때는 on을 빼고 ""로 작성
