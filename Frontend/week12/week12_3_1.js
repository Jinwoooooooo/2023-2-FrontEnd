//=============================================================
//Event Handler Zone
let mouseDownHandler = function() {
    this.style.border = "10px dotted pink";
    this.style.backgroundColor = "crimson";
}
let mouseUpHandler = function() {
    this.style.border = "10px double skyblue";
    this.style.backgroundColor = "blue";
}
let mouseOverHandler = function() {
    this.style.border = "10px double orange";
    this.style.backgroundColor = "yellow";
}
let mouseOutHandler = function() {
    this.style.border = "10px dotted beige";
    this.style.backgroundColor = "rgb(190, 190, 190)";
}
//=============================================================

//=============================================================
window.onload = function() {
    let btn = document.querySelectorAll(".button");

    for(let i = 0; i < btn.length; i++) {
        btn[i].addEventListener('mousedown', mouseDownHandler);
        btn[i].addEventListener('mouseup', mouseUpHandler);
        btn[i].addEventListener('mouseover', mouseOverHandler);
        btn[i].addEventListener('mouseout', mouseOutHandler);
    }
}