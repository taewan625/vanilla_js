const title = document.querySelector(".hello h1"); // querySelector는 element를 CSS 방식으로 검색할 수 있다
console.dir(title); // object로 표시한 element를 보여줌
title.innerText = "hello";
//console.dir(title)에서 title object의 여러가지 중에 style이 있었고 그안에 color가 존재하였음
title.style.color = "blue";
