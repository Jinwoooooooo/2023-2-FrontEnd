const clock = document.querySelector("h2#clock");

function sayHello() {
    console.log("Hello!");
}
function sayHi() {
    console.log("Hi!");
}
function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = (`${hours}:${minutes}:${seconds}`);
}
//* "1".padStart(2, "0")
//* 길이가 1인 문자가 있다고 치고
//* padStart()를 써서 이 문자열의 길이는 2가 되어야 한다고 말함
//* 만약 길이가 2가 되지 않는다면 문자열 앞에 "0"을 추가함.
//* "1".padEnd(2, "0")
//* 길이가 2가 되지 않는다면 문자열 뒤에 "0"을 추가함.
//! padStart는 String에만 적용되는 속성

getClock();
//* getClock()을 바로 호출해서 시간을 바로 볼 수 있게 하고,
//* 그 뒤에 serInterval에 의해서 1초마다 계속 호출하고 실행함.

setTimeout(sayHi, 5000);
setInterval(sayHello, 5000);
setInterval(getClock, 1000);
//* setInterval은 두 개의 매개변수를 받음
//* 첫 번째 매개변수는 내가 실행하고자 하는 function.
//* 두 번째 매개변수는 호출되는 function 간격을 몇 ms로 할 지 작성.

