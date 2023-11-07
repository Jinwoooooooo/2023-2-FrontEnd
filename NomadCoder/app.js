const title = document.querySelector(".hello:first-child h1");

function hanleTitleclick() {
    console.log("title was clicked!");
    title.style.color = 'red';
}

title.addEventListener("click", hanleTitleclick);