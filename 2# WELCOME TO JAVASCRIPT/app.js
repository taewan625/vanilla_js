// const playerName = "taewan";
// const playerPoints = 12341241;
// const playerHandsome = true;
// const playerFat = "little bit";

// const player = ["taewan", 12341241, true, "little bit"];
// array는 각각의 값이 무엇을 의미하는지 알려주지 않음
// player[0] == name player[1] ==points

// const player
// player.name;
// player.points;
// player.handsome;

//  object : { }; 사용, { } 안에는 = 아닌 : 사용
const player = {
  name: "taewan",
  points: 10,
  fat: true,
  handsome: true,
};
console.log(player);
console.log(player.name);
// player.name을 보고 알 수 있는 것 : player라는 object 안에 있는 name이란 property를 가져온 것
// 마찬가지로 console.log 또한      : console이란 object 안에 있는 log이란 property를 가져온 것
console.log(player["name"]); //이렇게도 가능

//update 가능
player.fat = false;
// 이건 edit의 개념이라서 const 가능한거고 object의 여러 값은 하나로 바꾸거나, dataType을 바꿀 때 error 나옴
player.points = player.points + 15;
player.name = player.name + "kwon";
// 원래 가지고 있는 값에 추가가 가능함 ㄷㄷ
console.log(player);

//property add
player.lastName = "kwon";
console.log(player);

// 정리 [list];   : 모든 값이 같은 의미를 가짐
//      {object}; : 값이 각각 다른 value를 가짐
