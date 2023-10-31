// Product Class 정의하기 (생성자 함수 대신에 사용)
class Product {
    constructor(name, price) {//생성자 함수 역할. (함수명은 Constructor로 고정.)
        this.name = name;
        this.price = price;
    }
    show() {
        console.log(`제품명: ${this.name}, 가격: ${this.price}원`);
    }
}

//위의 class Product를 이용하여 객체를 생성한다.
let pen = new Product("Ball Pen", 1000);
let NoteBook = new Product("MacBook", 2000000);

pen.show();
NoteBook.show();

console.log(pen instanceof Product);
//Product 클래스의 자식인지 확인.