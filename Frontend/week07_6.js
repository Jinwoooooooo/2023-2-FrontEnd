let printDIT = function() {
    console.log("Hello! DIT!");
}

function callFiveTimes(callBackFunction) {
    for(let i = 1; i <= 5; i++) {
        callBackFunction();
    }
}
callFiveTimes(printDIT);


function helloMaker(host) {
    let sayHello = function(guest) {
        console.log(`${guest}씨, 반갑습니다. 저는 ${host}입니다.`);
    }
    return sayHello;
}
//hong이라는 변수에 helloMaker 함수를 저장하고,
//hong("이순신")을 호출하면 helloMaker안의 sayHello 함수를 호출해서
//이순신씨, 반갑습니다. 저는 홍길동입니다. 라고 출력이 된다.
let hong = helloMaker("홍길동");
hong("이순신");

let lee = helloMaker("이순신");
lee("홍길동");

let aKey = setInterval(printDIT, 2000);

function stopPrintDIT() {
    clearInterval(aKey);
    console.log("printDIT의 반복 실행을 종료시켰습니다.");
}
setTimeout(stopPrintDIT, 10000);
