let a = [2, 3, 12, 43, 111, 88, 53];
let odd = [];
let even = [];

//while반복문을 이용하여
//배열 a의 원소를 차례대로 꺼내(배열에서는 삭제됨)
//홀수는 odd, 짝수는 even에 저장하고
//결과를 출력하시오
//   a = [....]
// odd = [....]
//even = [....]

while(a.length) { //배열 a에 원소가 1개 이상 있으면...
    //배열 a에서 원소 하나를 꺼낸다.
    let item = a.shift(); //배열 앞에서 1개 꺼냄 (제거)
    //꺼낸 원소 item을 확인하여, odd 또는 even에 넣는다.
    if(item%2 > 0)
        odd.push(item);
    else
        even.push(item);
}
console.log(`   a = [${a}]`);
console.log(` odd = [${odd}]`);
console.log(`even = [${even}]`);