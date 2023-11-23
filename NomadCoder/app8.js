const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
    event.preventDefault();
    //* 브라우저가 기본 동작을 실행하지 못하게 막는 함수
    //* event object는 preventDefault함수를 기본적으로 갖고 있음

    loginForm.classList.add(HIDDEN_CLASSNAME);
    //* hidden이라는 class name을 더해줘서 form을 숨기고

    const username = loginInput.value;
    //* 유저의 이름(input)을 변수로 저장

    localStorage.setItem(USERNAME_KEY, username);
    //* localStorage에 username이라는 key로 저장

    paintGreetings(username);
    //* painGreetings 함수는 username 이라는 인자를 받으며,
    //* 유저가 form안에 있는 input에 입력한 유저명을 받고 있음.

}

function paintGreetings(username) {
    greeting.innerText = `Hello ${username}`;
    //* 비어있는 h1 요소 안에 `Hello ${username}` 라는 텍스트를 추가해줌.

    greeting.classList.remove(HIDDEN_CLASSNAME);
    //* h1 요소로부터 "hidden" 이라는 클래스명을 제거해줌.
}
 //* submit 이벤트가 발생한다면, onLoginSubmit함수를 실행시킨다는 의미 
 //* JS는 onLoginSubmit함수 호출시 인자를 담아서 호출함. 해당 인자는 event object를 담은 정보들

//*  form을 submit하면 브라우저는 기본적으로 페이지를 새로고침 하도록 되어있다. << 우리가 원하는 것이 아님!
//* preventDefault() 함수를 추가함으로써 브라우저의 기본 동작을 막을 수 있다!!

//* 이 preventDefault 함수는 EventListener 함수의 '첫 번째 argument' 안에 있는 함수이다. 
//* 첫 arument는 지금 막 벌어진 event들에 대한 정보를 갖고 있다.
//* JS는(기본적으로)argument를 담아서 함수를 호출하는데, 이 argument가 기본 정보들을 제공하고 있다. 
//* ex) 누가 submit 주체인지, 몇 시에 submit을 했는지 등등 콘솔에 출력해보면 알 수 있음

const savedUsername = localStorage.getItem(USERNAME_KEY);


if(savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
    //* 만약 유저정보가 localStorage에 없다면 localStorage는 null값을 반환함.
    //* savedUsername 값이 null이라면, form의 hidden class명을 지움
} else {
    paintGreetings(savedUsername);
    //* 유저정보가 있다면 greeting안에 텍스트를 추가하고,
    //* 그런 다음 h1의 hidden class명을 지움
}