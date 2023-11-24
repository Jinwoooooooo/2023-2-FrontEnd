//함수 정의
function doubleX (n) {
    return n*n;
}
//----------------------
//함수 호출
let result = doubleX(43);
console.log(result);

//----------------------
function average(a,b) {
    return (a+b)/2;
}
//----------------------
let result1 = average(50, 20);
console.log(result1);

//----------------------
//이름을 입력받아 인사말을 출력하는 함수 만들기
function sayHello(name) {
    console.log("안녕하세요 " + name + "씨");
}
sayHello("정진우");

//------------------------------------------
function tagString(tagname, text) {
    return `<${tagname}>${text}</${tagname}>`;
}
console.log(tagString("h1", "Javascript")); //<h1>Javascript</h1>

//------------------------------------------
function tagString(tagname, text) {
    return ("<" + tagname + ">" + text + "</" + tagname + ">");
}
console.log(tagString("h2", "자바스크립트")); //<h1>Javascript</h1>

//------------------------------------------
//익명 함수
//배열을 넘겨받아 배열 원소들의 합계를 계산하여 반환하는 함수 만들기
//매개변수 a (배열)의 모든 원소의 합을 계산하고 return하기.
let a = [1,2,3,4,5];
let sum = 0;
let sumArray = function(arr) {
    for(let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}
console.log(sumArray(a));

2545943