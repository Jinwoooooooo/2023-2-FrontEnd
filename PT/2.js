let array = [10, 20, 30];
for(let i in array) {
    console.log(array[i]);
}

console.log("=============================");
for(let item of array) {
    console.log(item);
}

console.log("=============================");
let arr = [3, "DIT", false, undefined, {}, function(){}];
for(let i in arr) {
    console.log(`arr[${i}] = ${arr[i]},(${typeof arr})`);
}

console.log("=============================");
let arr1 = [3, 32, 53, 48, 49];
for(let item of arr1) {
    if(item % 3 !== 0) {
        console.log(item);
    }
}

console.log("=============================");
let arr2 = [2,3,19,34,33,123,56];
let odd = [];
let even = [];
for(let item of arr2) {
    if(item % 2 > 0) {
        odd.push(item);
    }
    else {
        even.push(item);
    }
}
console.log("odd = [" + odd + "]");
console.log("even = [" + even + "]");