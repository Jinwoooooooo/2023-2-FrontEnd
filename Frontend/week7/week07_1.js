
//매개변수 a(a는 배열)의 모든 원소가 number이면 true,
//아니면 false를 return.
let a = [1,2,3,4,5];
let isAllNumber = function(a) {
    for(let item of a) {
        if(typeof(item) === 'number') {
            return true;
        }
    }
    return false;
}
console.log(isAllNumber(a));


