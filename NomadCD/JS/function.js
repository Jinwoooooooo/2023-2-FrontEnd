function sayHello(nameOfPerson, age) {
    console.log("Hello! my name is " + nameOfPerson + " and I'm " + age);
}
sayHello("jinwoo", 23);
sayHello("nico", 10);
sayHello("lynn", 21);

console.log("---------------------------------------");

function plus(firstNumber, secondNumber) {
    console.log(firstNumber + secondNumber);
}
plus(8, 60);

console.log("---------------------------------------");

function divide(a,b) {
    console.log(a/b);
}
divide(98, 10);

console.log("---------------------------------------");
const player = {
    name: "jinwoo",
    sayHello: function(otherPersonsName) {
        console.log("Hello! " + otherPersonsName + " nice to meet you");
    },
};

player.sayHello("nico");
player.sayHello(player.name);