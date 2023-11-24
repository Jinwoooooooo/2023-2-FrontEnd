let max = (a,b,c) => {
    return a>b ? a:b && a>c ? a:c && b>c ? b:c;
}
console.log(max(1,2,3));





let max2 = (a,b) => {
    if(a == undefined) 
        a = 0;
    if(b == undefined)
        b = 0;

    return a>b ? a:b;
}
console.log(max2(1,2));

let max1 = (a = 0, b = 0) => {
    return a>b ? a:b;
}
console.log(max1());