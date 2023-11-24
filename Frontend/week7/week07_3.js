let welcome = function (target="손님", host="홍길동") {
    if(target == "손님") {
        console.log(`어서오세요 ${target}, 저는 ${host}입니다.`);
    }
    else {
        console.log(`어서오세요 ${target}씨, 저는 ${host}입니다.`);
    }
}
welcome();
welcome("이순신");
welcome("이순신", "강감찬");