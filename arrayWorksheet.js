//Part 1

let fruits = ["apple", "banana", "cherry"];

console.log(fruits[1]);

console.log(fruits.length);

// Part 2

fruits.push("orange");

console.log(fruits);

let lastFruit = fruits.pop();

console.log(lastFruit);

fruits.push("mango", "strawberry");

console.log(fruits);

let lastFruits = fruits.pop();

console.log(fruits.length); // 4 because we removed a fruit before.

// Part 3

for (let i = 0; i < fruits.length; i++){
    console.log(fruits[i]);
}

for (let i = 0; i < fruits.length; i++){
    console.log(fruits[i].toUpperCase());
}

let appleAdd = 0;

for (let i = 0; i < fruits.length; i++){
    if(fruits[i] === 'apple') {
        appleAdd ++;
    }
}

console.log("Apple Number:", appleAdd);

// Part 4

let cart = [];

cart.push("cheese", "milk", "bread");

console.log(cart);

let lastFood = cart.pop();

console.log(cart.length); // Should be 2 because of removing bread

let numbers = [1, 2, 3, 4, 5];
let reverseNum = [];
for (let i = numbers.length - 1; i >= 0; i--) { // i-- because it's subtracting while i++ adds.
    reverseNum.push(numbers[i]);
}

console.log(reverseNum);

// Part 5

let array1 = ["a", "b", "c", "d"];
let array2= ["red", "green", "blue"];

if(array1.length > array2.length) {
    console.log("Great! Array 1 has a greater length than Array 2!")
} else {
    console.log("EXPLODE");
}

// Part 6

const array = [10, 20, 30, 40, 50, 60];

for (i = 0; i < array.length; i+=2) {
    console.log(array[i]);
}

// Part 7

let studentNames = ['Alice', 'Bob', 'Charlie'];
let subNames = ['Math', 'Science'];

for (let i = 0; i < studentNames.length; i++)
    for (let j = 0; j < subNames.length; j++)
            console.log(`${studentNames[i]} - ${subNames[j]}`) // Nested loops are a combo, kind of matching against each other. In this example, it was checking student names and matching them with subjects. In another example I did, I had to check for mutual followers.
        