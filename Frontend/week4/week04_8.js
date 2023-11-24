let sum = 0;
let a = [2, 3, 12, 43, 111, 88, 53];
//for in 반복문을 활용하여
//배열 a의 모든 원소의 합계를 구하고 결과를 다음과 같이 출력
//sum of a = xxx

for(let i in a) {
    sum += a[i];
}
console.log("sum of a =", sum);

//for in은 객체의 반복에서 사용