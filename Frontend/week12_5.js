//=============================================================
//Event Handler Zone
let mouseEnterHandler = function() {
    this.style.borderColor = "aqua";
    //이벤트 발생 내용을 div#eventlog에 기록한다.
    //예) Mouse Entered divA.
    let enterLog = document.getElementById("eventLog");
    enterLog.innerHTML += "Mouse Entered " + this.id + "<br>";
}
let mouseLeaveHandler = function() {
    this.style.borderColor = "gray";
    //예) Mouse Lefted divA.
    let leftLog = document.getElementById("eventLog");
    leftLog.innerHTML += "Mouse Lefted " + this.id + "<br>";
}
let mouseOverHandler = function() {
    this.style.backgroundColor = "skyblue";
    //예) Mouse Lefted divA.
    let overLog = document.getElementById("eventLog");
    overLog.innerHTML += "Mouse Over " + this.id + "<br>";

    //이벤트 전파를 중단 시킨니다.
    event.stopPropagation();
}
let mouseOutHandler = function() {
    this.style.backgroundColor = "white";
    //예) Mouse Lefted divA.
    let outLog = document.getElementById("eventLog");
    outLog.innerHTML += "Mouse Out " + this.id + "<br>";

    //이벤트 전파를 중단 시킨니다.
    event.stopPropagation();
}
let clearEventLog = function() {
    this.innerHTML = "";
}
//=============================================================

//=============================================================
window.onload = function() {
    let divArray = document.getElementsByClassName("item");
    for(let div of divArray) {
        div.addEventListener("mouseenter", mouseEnterHandler);
        div.addEventListener("mouseleave", mouseLeaveHandler);
        div.addEventListener("mouseover", mouseOverHandler);
        div.addEventListener("mouseout", mouseOutHandler);
    }
    let eventClear = document.getElementById("eventLog");
    eventClear.addEventListener("dblclick", clearEventLog);
}