
// 배열 = 객체(속성, 메소드)
Array // 자바스크립트의 모든 자료형이 배열에 저장 가능. 
      // Array는 object형
      // 형식이 같은 자료 여러 개가 모여 새로운 하나를 이룬 형식이다

let fruits = ["apple", "kiwi", "mango"]; 

fruits[0];
// 'apple'
fruits[0][1];
// 'p'

let a = [100, "DIT", true, undefined, function(){}, {}];
// a
// [ 100, 'DIT', true, undefined, [Function (anonymous)], {} ]

typeof(a[5]);
// 'object'

a[0] = "KOREA";
// [ 'KOREA', 'DIT', true, undefined, [Function (anonymous)], {} ]

// 속성 (ex. 배열의 내용, 길이 등)
// length 
a.length
// 6
fruits.length
// 3

a = [ 10, 20, 30, 40, 50 ];
// 메소드 (실행 기능)
// method 
// 요소 추가 
// (배열명.push) 배열의 마지막에 추가 
a.push(60);
// (배열명.unshift) 배열의 첫번째 요소 앞에 추가.
a.unshift(2, 4);

// 요소 제거
// (배열명.pop) 배열의 마지막 요소 삭제
a.pop();
let c = a.pop(); // 배열의 마지막 요소를 삭제하고 새로운 변수에 저장.

// (배열명.shift) 배열의 첫번째 요소 삭제.
a.shift();

// 배열명.splice(시작위치, 삭제 개수, [추가할 항목 리스트])
a.splice(2, 1); 
[ 10, 20, 40, 50 ]

a.splice(2, 0, 30);
[ 10, 20, 30, 40, 50 ]

a.splice(2, 2);
[ 10, 20, 50 ]

a.splice(2, 0, 30,40);
[ 10, 20, 30, 40, 50 ]

a.splice(2, 1, 35);
[ 10, 20, 35, 40, 50 ]