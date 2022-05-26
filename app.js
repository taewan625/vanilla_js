// 이렇게 JS에서 porperty(ex_blue) 를 변경가능하지만 JS는 event를 listen하는 것이 주 목적
// event=click event: click or 무엇인가 위에 올려놓는 것도 event ex_h1위로 mouse 올리는 것

const title = document.querySelector(".hello h1"); // querySelector는 element를 CSS 방식으로 검색할 수 있다

function handleTitleClick() {
  title.style.color = "blue";
  console.log("title was clicked!");
}
//이것은 function을 실행하기 위한 것인데 바로 실행하지 않고 먼저 js로 가서 js가 실행하기 위해서 사라져야함
// handleTitleClick();

// 밑에 click을 했을 때 위의 function으로 listen을 해줄 것임, 그리고 이를 적용해야하므로 밑의 argument에 넣어 줄 것임
title.addEventListener("click", handleTitleClick); //function에 절대 ()넣지 말기
//                     ( "어떤 event" , 어떤 listen의 function) ;
// ##아주중요## (): 함수를 자동으로 실행한다는 의미 그래서 만약 handleTitleClick에 () 넣었으면 console 창에서 click을 안해도 title was clicked! 표시됨
// ##아주중요## 그래서 () 빼주는 것임

// addEventListener: event를 listen 하는 것 그중에서도 모든 event를 listen하는 것이 아니므로 click이란 것을 listen 할 것임
// click이란 event를 하면 handleTtitleClick이란 listen을 하고 보니깐 이 listen은 function 이였고
