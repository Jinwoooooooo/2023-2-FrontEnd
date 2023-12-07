//? 끌고 다닐 객체
//* ondragstart - 끌기 시작할 때 (click 상태에서 이동)
//* ondrag - 끌고 다니는 동안 계속 발생 (click 유지)
//* ondragend - 마우스 버튼 해제

//? 끌고온 객체를 받아줄 객체
//* ondragover - 드래깅 객체가 영역 위로 왔을 때
//* ondragleave - 드래깅 객체가 영역 밖으로 나갔을 때
//* ondrop - 드래깅 객체를 영역 위에 놓았을 때.

//!======================================================
//* Global Variable Zone

let draggingCard = null; //? 현재 드래깅 중인 카드 객체
let dragOverBox = null; //? 드래깅 중인 카드 객체가 올라가 있는 박스
let dragOverCard = null; //? 드래깅 중인 카드 객체가 올라가 있는 카드
//!======================================================
//* Card Event Handler

function onDragStartCard(event) {
    draggingCard = this; //? 드래깅 중인 카드를 드래깅 중인 카드로 설정
    this.classList.add("draggingCard");
}
function onDragEndCard(event) {
    draggingCard = null; //? 드래깅 중인 카드가 없으므로 설정.
    this.classList.remove("draggingCard");

    //? dragOver 상태에서 드래깅이 종료되면 dragLeave 이벤트가 발생하지 않고
    //? 종료되었기 때문에 box 배경색이 복구되지 않는다. 그러므로 추가 정리가 필요.
    if(dragOverBox != null) {
        dragOverBox.classList.remove("overBox");
        dragOverBox = null;
    }
    //? dragOver 상태에서 드래깅이 종료되면 dragLeave 이벤트가 발생하지 않고
    //? 종료되었기 때문에 card 배경색이 복구되지 않는다. 그러므로 추가 정리가 필요.
    if(dragOverCard != null) {
        dragOverCard.classList.remove("overCard");
        dragOverCard = null;
    }
}
function onDragOverCard(event) {
    event.preventDefault(); //? 웹 브라우저의 기본 동작을 막는 메소드
    dragOverCard = this;
    this.classList.add("overCard");
}
function onDragLeaveCard(event) {
    this.classList.remove("overCard");
    dragOverCard = null;
    
}
//!======================================================
//* Box Event Handler

function onDragOverBox(event) {
    event.preventDefault(); //? 웹 브라우저의 기본 동작을 막는 메소드
    console.log(this.InnerHTML);
    dragOverBox = this;
    this.classList.add("overBox");
}
function onDragLeaveBox(event) {
    dragOverBox = null;
    this.classList.remove("overBox");
}
function onDropBox(event) {
    event.preventDefault();
    //? 카드 위에 놓은 것인지, 아니면 박스 위에 놓은 것인지 확인이 필요함.
    //? 드래깅 중인 카드에 반응(dragOver event)한 카드가 있으면 해당 카드가 우선 적용된다.
    if(dragOverCard) { //? 카드 위에 놓은 경우
        //? 드래깅 중인 카드(draggingCard)를 dragOverCard 앞에 삽입한다.
        this.insertBefore(draggingCard, dragOverCard);
    } else { //? 박스 위에 놓은 경우
        this.appendChild(draggingCard);  
        //? Drop 이벤트가 발생한 box 객체(this)의 자식 노드로 드래깅 중인 객체를 연결한다.
    }
    

}
//!======================================================
$(document).ready(function() {
    let cardArray = document.getElementsByClassName("card");
    for(let card of cardArray) {
        card.addEventListener("dragstart", onDragStartCard);
        card.addEventListener("dragend", onDragEndCard);
        card.addEventListener("dragover", onDragOverCard);
        card.addEventListener("dragleave", onDragLeaveCard);
    }
//!======================================================
    let boxArray = document.getElementsByClassName("box");
    for(let box of boxArray) {
        box.addEventListener("dragover", onDragOverBox);
        box.addEventListener("dragleave", onDragLeaveBox);
        box.addEventListener("drop", onDropBox);
    }
})
//!======================================================