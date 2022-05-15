// data 정리하는 법
// 가장 기본적인 data structure는 array 이다

// array 가 없는 요일 작성법
const mon = "mon";
const tue = "tue";
const wed = "wed";
const thu = "thu";
const fri = "fri";
const sat = "sat";
const sun = "sun";

// list로 그룹화

let daysOfWeek = mon + tue + wed + thu + fri + sat + sun;
console.log(daysOfWeek);
// 엄청 긴게 나옴

// array
daysOfWeek = [mon, tue, wed, thu, fri, sat, sun];
// 현재 mon, tue, wed 들은 " " 안에 있지 않아서 valiable로 취급 되고 "" 넣어주면 text로 바뀜
console.log(daysOfWeek);
// [] 이게 array를 위한 기호고 ,로 나눠줌어느 datatype이든지 다 들어감

const anyDataType = [true, false, null, undefined, 123, "taewan"];
console.log(anyDataType);
