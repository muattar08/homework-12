//  JS Homework 5 — Сложить все price из массива объектов
let arr1 = [[{a: {price: 20}}], [{a: {price: 35}}], [{a: {price: 44}}]];
let total = 0;

for (let subArr of arr1) {
    for (let obj of subArr) {
        total += obj.a.price;
    }
}

console.log("Homework 5 — Total:", total); 

//  JS Homework 6 — Задача 1: Ввод числа больше 100 один раз
let num = prompt("Введите число больше 100", "");

if (num !== null && !isNaN(num) && +num > 100) {
    alert("Гуд!");
} else {
    alert("Вы ввели неправильное число!");
}

//  JS Homework 6 — Задача 2: Разделение массива на чётные и нечётные числа
let arr2 = [4, 16, 19, 22, 11, 144, 967, 19124];
let even = [];
let odd = [];

for (let num2 of arr2) {
    if (num2 % 2 === 0) {
        even.push(num2);
    } else {
        odd.push(num2);
    }
}

console.log("Homework 6 — Чётные числа:", even);   
console.log("Homework 6 — Нечётные числа:", odd);  