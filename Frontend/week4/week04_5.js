// while 반복문을 이용하여 1~10까지의 합을 구하고 결과 출력하기
let i = 1;
let sum = 0;
let n = 99;

    while(i <= n) {
        sum += i;
        i++;
}
console.log(`1 + 2 + ... + ${n} = ${sum}`);