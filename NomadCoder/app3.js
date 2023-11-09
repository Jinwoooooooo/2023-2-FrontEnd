const h1 = document.querySelector("div.hello:first-child h1");

function hanleTitleclick() {
    const clickedClass = "clicked";
    if(h1.classList.contains(clickedClass)) {
        //contains은 명시한 class가
        //HTML element의 class에 포함되어 있는지를 알려줌.
        h1.classList.remove(clickedClass);
        //classList에 clicked class가 있으면 clicked class를 제거
    } else {
        h1.classList.add(clickedClass);
        //classList에 clicked class가 없면 clicked class를 추가
    }
}

h1.addEventListener("click", hanleTitleclick);