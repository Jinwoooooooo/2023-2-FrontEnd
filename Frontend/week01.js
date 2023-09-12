
console.log("JavaScript Console Output");

"동의과학대 \"컴퓨터\" 소프트웨어과"; //싱글, 더블 포텐셜, 백슬래쉬 출력할때. 앞에 백슬래쉬 넣기

`22 * 345 = ${22*345}`; //계산 가능

'22 * 345 = ${22*345}'; //계산 불가능, 문자로 표현

"22 * 234 = " + (22 * 234); //문자열 연결

"DIT"[1]; //"I"

let st = "Korea";
st[2]; //"r"

(2 > 3) ? "CHINA" : "KOREA"; //2 > 3 은 거짓이기 때문에 "KOREA" 출력
(3 > 2) ? "CHINA" : "KOREA"; //2 < 3 은 참이기 때문에 "CHINA" 출력

j = true;
typeof(j);
//boolean, true or false

let j;
typeof(j);
//undefined, 선언은 했으나 초기화 되지 않은 것을 표현하는 자료형
//ECMAscript6 이전에는 선언되지 않은 변수도 모두 undefined 로 처리

j = function f(){};
typeof(j);
//function, 함수도 하나의 자료형

j = {};
typeof(j);
//object, JavaScript의 모든 것이 object

Number("365");
//365

Number(true);
//1

Number(false);
//0

Number("DIT");
//NaN : Not a Number

isNaN(Number("DIT"));
//true, 숫자가 아닌지 확인
isNaN(Number(123));
//false

String() //입력한 내용은 모두 문자열로 변환

Boolean() //0, NaN, "", null, undefined 이 다섯가지는 모두 거짓.
          // 그 외 모두 참.

365 == "365";
0 == "";
//true  

365 === "365";
0 === "";
//false, 값과 자료형이 모두 일치해야 True.
