'use strict';

const arr = [];

for (let i = 1; i < 10; i++) {
    arr.push(Math.round(Math.random() * 10) + 1);
}

console.log(arr);

const arr1 = [];

for (let i = 1; i <= 10; i++) {
    arr1.push(Math.random());
}

console.log(arr1);