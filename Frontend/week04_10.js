let sum = 0;
let a = [2, 3, 12, 43, 111, 88, 53];
//for of 반복문을 활용하여
//배열 a의 모든 원소의 합계를 구하고 결과를 다음과 같이 출력
//100을 넘지 않는 최대 합계 구하기.
//sum of a = xxx

for(let item of a) {
    if((sum+item)>100)
        break;  //반복문 중단하고 탈출.
    sum += item;
}
console.log("sum of a =", sum);

//for of 는 배열의 반복에서 사용

// * 함수 *
//어떤 일을 처리하기 위한 코드를 따로 모아 묶어 놓은 것