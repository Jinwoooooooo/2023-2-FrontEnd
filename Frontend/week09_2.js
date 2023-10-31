let student = {
    name: "정진우",
     age: 23,
    code: 202353059,
    dept: "컴퓨터소프트웨어과",
    intro: function() {
    console.log(`안녕하세요, 저는 ${this.dept} ${this.name}입니다.`);    
   },
   몇살이에요: function() {
    console.log(`저는 ${this.age}살 입니다.`);
   }
};

student.intro();
student.몇살이에요();

student.btype = "A";
student.혈액형 = function () {
    console.log(`제 혈액형은 ${this.btype}형 입니다.`);
};
student.혈액형();