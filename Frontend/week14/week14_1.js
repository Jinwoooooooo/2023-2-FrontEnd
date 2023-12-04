//!=====================================================
let ballTop;
let ballLeft;
//!=====================================================
function gid(id) {
    return document.getElementById(id);
}
//!=====================================================
function moveHandler() {
    $("#ball").animate({
        left: "+=50px",
        top: "+=50px",
        width: "+=20px",        
        height: "+=20px"        
    })
}
//!=====================================================
$(document).ready(function() {
    //? div의 태그의 스타일 속성 top 값을 ballTop 전역변수에 백업 받는다.
    ballTop = $("#ball").css("top");
    ballLeft = $("#ball").css("left");

    //? 이벤트 핸들러를 해당 객체에 연결한다.
    $("#move").click(moveHandler);
    $("#reset").click(function() {
        $("#ball").animate({
            left: ballLeft,
            top: ballTop,
            width: "50px",
            height: "50px"
        })
    })
    $("#print").click(function() {
        $("#ball").html("JQuery");
    })
})
//!=====================================================
