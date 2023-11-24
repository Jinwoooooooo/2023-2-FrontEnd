const car = {
    brand: 'Toyota',
    model: 'Camry',
    year: 2020,
    color: 'Silver'
}

for(let i in car) {
    console.log(`${i}: ${car[i]}`);
}

let numbers = [1, 2, 3, 4, 5];
let sum = 0;
for(let item of numbers) {
    sum += item;
}
console.log(sum);

const text = 'Hello, World!';
let reverse = '';
for(let item of text) {
    reverse = item + reverse;
}
console.log(reverse);