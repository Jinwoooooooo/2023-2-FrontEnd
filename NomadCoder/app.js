const h1 = document.querySelector("div.hello:first-child h1");

function hanleTitleclick() {
    console.log("title was clicked!");
    h1.style.color = 'white';
}

function handleMouseEnter() {
    h1.innerText = "Mouse is here!";
}
function handleMouseLeave() {
    h1.innerText = "Mouse is gone!";
}
function handleWindowResize() {
    document.body.style.backgroundColor = "tomato";
}
function handleWindowCopy() {
    alert("Copier!");
}
function handleWindowOffline() {
    alert("SOS no WIFI!");
}
function handleWindowOnline() {
    alert("ALL GOOOD");
}

h1.addEventListener("click", hanleTitleclick);
h1.addEventListener("mouseenter", handleMouseEnter);
h1.addEventListener("mouseleave", handleMouseLeave);

window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);