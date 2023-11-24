window.onload = function() {
    let btn = document.querySelector(".button");
    btn.onmousedown = function() {
        this.style.border = "10px dotted pink";
        this.style.backgroundColor = "crimson";
    }
    btn.onmouseup = function() {
        this.style.border = "10px double skyblue";
        this.style.backgroundColor = "blue";
    }
    btn.onmouseover = function() {
        this.style.border = "10px double orange";
        this.style.backgroundColor = "yellow";
    }
    btn.onmouseout = function() {
        this.style.border = "10px dotted beige";
        this.style.backgroundColor = "rgb(190, 190, 190)";
    }
}