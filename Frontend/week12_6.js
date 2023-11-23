function gid(id) {
    return document.getElementById(id);
}

let div = 300;


let moveLeft = function() {
    //이동시킬 좌표값부터 수정.
    div -= 50;
    //수정된 좌표값으로 해당 객체 스타일을 지정
    let box = document.querySelector("div");
    box.style.left = div + "px";
}
let moveRight = function() {
    //이동시킬 좌표값부터 수정.
    div += 50;
    //수정된 좌표값으로 해당 객체 스타일을 지정
    let box = document.querySelector("div");
    box.style.left = div + "px";
}
let moveUp = function() {
    //이동시킬 좌표값부터 수정.
    div -= 50;
    //수정된 좌표값으로 해당 객체 스타일을 지정
    let box = document.querySelector("div");
    box.style.top = div + "px";
}
let moveDown = function() {
    //이동시킬 좌표값부터 수정.
    div += 50;
    //수정된 좌표값으로 해당 객체 스타일을 지정
    let box = document.querySelector("div");
    box.style.top = div + "px";
}

window.onload = function() {
    gid("btnleft").addEventListener("click", moveLeft);
    gid("btnright").addEventListener("click", moveRight);
    gid("btnup").addEventListener("click", moveUp);
    gid("btndown").addEventListener("click", moveDown);
}