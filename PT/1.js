console.log(273);
console.log(10+20+30*2);
console.log("JavaScript Programming"); 
console.log("동의과학대 \"컴퓨터소프트웨어과\" 학생"); 
//템플릿 문자열
console.log("=============================");
for(let i=1; i<10; i++) {
    console.log(`9 X ${i} = ${9*i}`);
}
console.log("=============================");
for(let i=1; i<10; i++) {
    console.log("9 X " + i + " = " + 9*i);
}
console.log("=============================");


let arr = [1,2,3,4,5];
for(let i=0; i<arr.length; i++) {
    console.log(`arr[${i}] = ${arr[i]}`);
}
console.log("=============================");
for(let i=0; i<arr.length; i++) {
    console.log("arr[" + i + "] = " + arr[i]);
}
console.log("=============================");
for(let i = arr.length -1; i>=0; i--) {
    console.log(`arr[${i}] = ${arr[i]}`);
}