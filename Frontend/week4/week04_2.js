
let a = [23, "DIT", true, undefined, {}, function(){}];

for(let i in a) {
   // console.log(`a[${i}] = ${a[i]}, (${typeof(a[i])})`);
    console.log("a["+i+"] = "+a[i]+", ("+typeof(a[i])+")");
}
/*
for in 을 사용하여 아래와 같이 출력하기
a[0] = 23, (number)
a[1] = "DIT" (string)
...
*/