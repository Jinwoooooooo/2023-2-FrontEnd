const h1 = document.querySelector("div.hello:first-child h1");

function hanleTitleclick() {
    h1.classList.toggle("clicked");
    //h1의 classList에 clicked class가 있는지 확인해서
    //만약 있다면, toggle이 clicked를 제거해줌.

    //만약 h1의 classList에 Clicked가 없으면,
    //toggle은 clicked를 classList에 추가해줌.

    //app3.js의 function을 한 줄로 만들 수 있음.
}

h1.addEventListener("click", hanleTitleclick);