//학식 메뉴를 객체로 설계하기
class Menu {
    constructor(name, price, count = 0) {
        this.name = name;   //메뉴명
        this.price = price; //  가격
        this.count = count; //  수량
        console.log(`새 메뉴 [${this.name} ${this.price}원] (재고량: ${this.count}개)가 생성되었습니다.`);
    }
    //메뉴 현황 보여주기
    show() {
        console.log(`[${this.name} ${this.price}원] (재고량: ${this.count}개)`);
    }
    //메뉴 주문
    order(count = 1) {
        if(count <= this.count) {
            console.log(`${this.name} ${count}개를 판매하였습니다.`);
            this.count = this.count - count;
            //판매한 개수를 재고량에 반영한다.
        }
        else {
            console.log(`${this.name}의 재고가 ${this.count}개 남았습니다. ${this.count}개까지 주문 가능합니다.`);
        }
    }
    supply(count) {
        this.count += count;
        console.log(`${this.name} 재고가 ${count}개 추가되었습니다. 현재 ${this.count}개 있습니다.`);
    }
}
//======================================
//키오스크를 객체로 설계하기
//메뉴를 관리하면서, 주문처리를 담당.
class Kiosk {
    constructor(title) {
        this.title = title;
        this.menu = []; //키오스크 생성 초기에는 메뉴가 없다.
        console.log(`[${this.title}] 학식 판매 키오스크가 오픈하였습니다.`);
    }
    //메뉴 추가 메소드
    addMenu(menu) {
        this.menu.push(menu);
        console.log(`[${this.title}]에 [${menu.name}] 메뉴가 추가되었습니다.`);
    }
    //메뉴판 보여주기
    //속성 menu 배열에 저장된 메뉴 목록을 보여준다.
    showMenu(menu) {
        console.log(`=====${this.title} 메뉴판=====`);
        for(let menu of this.menu) {
            menu.show();
        }
        console.log(`========================================`);
    }
}
//======================================
//메뉴 생성하기
let menu1 = new Menu("돈까스", 4500, 5);
let menu2 = new Menu("김치찌개", 5500, 10);
let menu3 = new Menu("라면", 2500, 50);

//판매 키오스크 생성하기
let DIT = new Kiosk("동의과학대학교 학생식당");

//키오스크에 판매할 메뉴 생성하기
DIT.addMenu(menu1);
DIT.addMenu(menu2);
DIT.addMenu(menu3);
DIT.showMenu();
