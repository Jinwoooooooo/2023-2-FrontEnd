//속성명은 한글, 한자도 사용 가능.
//속성명은 문자열로 표현 가능. 숫자 시작, 띄어쓰기 등 가능.
//속성명을 문자열로 했을 때, 출력은 (student["My name"]).

let student = {
    "My name": "정진우",
    나이: 23,
    code: 202353059,
    dept: "컴퓨터소프트웨어과"
};

let stname = "My name";

console.log(student.나이);

console.log(student["code"]);
console.log(student["My name"]);

student["My name"] = "한소희";
console.log(student["My name"]);

console.log(student[stname]);