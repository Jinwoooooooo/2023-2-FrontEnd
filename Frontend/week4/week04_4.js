let a = [2, 3, 12, 43, 111, 88, 53];
let odd = [];
let even = [];

// for of를 이용하여 a의 원소 중 홀수는 odd, 짝수는 even으로
// 최종 출력 :
// 배열의 메소드를 반드시 활용할 것.
// odd = [....]
// even = [....]

for(let item of a) {
    if(item%2 > 0) 
    odd.push(item);
else
    even.push(item);
}
console.log(` odd = [${odd}]`);
console.log(`even = [${even}]`);