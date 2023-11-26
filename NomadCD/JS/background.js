const images = [
    "Newyork.jpg",
    "Slovenia.jpeg",
    "Japan.jpg",
];

const chosenImage = images[Math.floor(Math.random() * images.length)];
//* Math.random() 으로 나온 숫자에 images Array의 길이 값을 곱한 숫자를 내림.

const bgImage = document.createElement("img");
bgImage.src = `/Img/${chosenImage}`;

document.body.appendChild(bgImage);

//* insertBefore() 메소드
//* 이 메소드는 참조된 노드 앞에 특정 부모 노드의 자식 노드를 삽입함.
//* const h2 = document.querySelector("#clock")
//* document.body.insertBefore(bgImage, h2);
//* 두개의 인자중에 앞의 bgImage는 새로운 노드 즉 추가하고 싶은 노드이고 h2는 참조할 노드. 
//* 즉 이렇게 코드를 짜면 h2요소 앞에 bgImage가 추가됨.

//? 1. Math 객체 기능
//? Math.random() 0부터 1사이 무작위의 값을 반환해줌
//? Math.floor() 내림
//? Math.ceil() 올림
//? Math.round() 반올림

//? 2. JS에서 html 요소를 생성
//? createElement(" ")
//? 예를 들어,
//? document.createElement("img")일 경우 html 내에 img 태그를 생성

//? appendChild()
//? 함수 안의 경로에 정의한 값을 가장 뒤에서 기입함
//? prepend()
//? 반대로 앞에서 기입