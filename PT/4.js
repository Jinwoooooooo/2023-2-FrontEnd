let arr = [3, 14, 8, 29, 6, 33, 55, 41, 32];
let sum = 0;
let i = 0;

while (i < arr.length) {
  if (sum + arr[i] > 100) {
    break; // 합계가 100을 넘으면 루프 종료
  }
  
  sum += arr[i];
  i++;
}

console.log(`요소 ${i}개의 합계: ${sum}`);
