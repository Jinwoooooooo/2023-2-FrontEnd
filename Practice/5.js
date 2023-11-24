let text = "Hello, World!";
let a = "";
let hello = function(text) {
    for(let i = text.length - 1; i>=0; i--) {
        a += text[i];
    }   
}
hello(text);
console.log(a);