
let fruits = ["apple", "kiwi", "mango", "banana", "grape"];
// fruits.join() 결과와 같은 문자열을 fruits 에서 생성하여 출력하기.

let str = "";

for(let i = 0; i < fruits.length; i++) {
    str = str + fruits[i] + ",";
    str += fruits[fruits.length -1];
}

console.log(str);
console.log(fruits.join());

// for(let i = 0; i < fruits.length; i++)
//     str = str + fruits[i] + ",";

// console.log(str.slice(0, str.length -1));
// console.log(fruits.join());
