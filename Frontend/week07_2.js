let max = (a,b,c) => {
    return a>b ? a:b && a>c ? a:c && b>c ? b:c;
}
console.log(max(1,2,3));


let max3 = (a = 0, b = 0, c = 0) => {
    return max3(max3(a, b), c);
}
console.log(max3(-1, -4));


let max2 = (a,b) => {
    if(a == undefined) 
        a = 0;
    if(b == undefined)
        b = 0;

    return a>b ? a:b;
}
console.log(max2());

let max1 = (a = 0, b = 0) => {
    return a>b ? a:b;
}
console.log(max1());