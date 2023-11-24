
// for 반복문

for(let i = 1; i <= 9; i++) {
    // console.log("9 X " + i + " = " + 9*i);
    console.log(`9 X ${i} = ${9*i}`); // 템플릿 문자열 백틱 ``
}
// 9 X 1 = 9
// 9 X 2 = 18
// 9 X 3 = 27
// 9 X 4 = 36
// 9 X 5 = 45
// 9 X 6 = 54
// 9 X 7 = 63
// 9 X 8 = 72
// 9 X 9 = 81


let fruits = ["apple", "kiwi", "mango", "banana", "grape"];
// 배열 fruits 에 있는 과일명 차례대로 출력하기

for(let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}