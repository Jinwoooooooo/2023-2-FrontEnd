function mouseOverHandler() {
    //1. 객체 선택 mainicon
    //querySelector로 (".mainicon") -하나-를 선택.
    let mainicon = document.querySelector(".mainicon");
    //2. mainicon의 src 속성값을 변경한다. (이벤트가 발생한 객체 자신의 src 속성값으로)
    mainicon.src = this.src;

    let fn = document.getElementById("filename");
    let words = this.src.split("/");
    fn.innerHTML = words[words.length -1].split(".")[0];
}
function attachEventHandler() {
    //Img.icon 객체들 각각의 onmouseover 이벤트에 핸들러를 연결한다.
    let iconArray = document.getElementsByClassName("subicon");
    //getElementsByClassName은 값을 배열로 가져오기 때문에
    //
    for(let icon of iconArray) {
        icon.addEventListener("mouseover", mouseOverHandler);
    }
}

window.onload = function() {
    attachEventHandler();
}

//id는 특별한 하나를 대상으로 선택
//class는 성격이 비슷한 여러 대상을 선택