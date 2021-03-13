//! ECMAScript 2014 / ES5

//* "use strict";
// 'use strict';
// let x = 3.14;
// console.log(x);

//! ECMAScript 2015 / ES6

//* let & const
// const myName = 'Fahim';
// console.log(myName);
// myName = 'faysal'; // don't work
// console.log(myName);

// function biodata() {
//   let myName = 'Fahim';
//   console.log(myName);
// }
// console.log(myName); // don't work because "let" work block-scope.

//* template strings
// let str = 'Fahim Faysal';
// let age = 23;
// console.log(`My name is ${str} and i am ${age}`);

//* default argument

// function add(a = 4, b = 6) {
//   return a + b;
// }
// console.log(add(5));

//* destructuring

//? Array Destructuring

// const myBioData = ['Fahim', 'Faysal', 23];
// let [firstName, lastName, age] = myBioData;
// console.log(firstName, lastName);

//? we can add value.
// const myBioData = ['Fahim', 'Faysal', 23];
// let [firstName, lastName, age, versity = 'National University'] = myBioData;
// console.log(firstName, lastName, age, versity);

//? Object Destructuring

// const myBioData = {
//   fName: 'Fahim',
//   lName: 'Faysal',
//   age: 26,
// };

// let { fName, lName, age, versity = 'National University' } = myBioData;
// console.log(fName, lName, versity);

//* object properties
// let myName = 'fahim';
// const myBio = {
//   [myName]: 'I am Fahim Faysal',
//   [20 + 3]: 'is my age',
// };
// console.log(myBio);

//? if key & value are same
// let myName = 'Fahim';
// let myAge = 23;
// const myBio = { myName, myAge };
// console.log(myBio);

//* arrow function
//? normal function
// console.log(sum());
// function sum() {
//   let a = 5,
//     b = 6;
//   return sum = a + b;
// }

//? fat arrow function
// const sum = (a, b) => {
//   return `Total number is ${a + b}`;
// };
// console.log(sum(5, 10));

// with default argument
// const sum = (a, b) => {
//   return `Total number is ${a + (b = 100)}`;
// };
// console.log(sum(5, 10));

//* rest/spread properties use in only array
// const person = ['Fahim', '23', 'BSc'];
// const sperson = [...person];
// console.log(person);
// console.log(sperson);

//! ECMAScript 2016 / ES7

//* array includes
// const colors = ['red', 'green', 'blue', 'white', 'pink'];
// let isPresent = colors.includes('red');
// console.log(isPresent);
// isPresent = colors.includes('yellow');
// console.log(isPresent);

//* exponentiation operator(**)
// console.log(2 ** 4);
// console.log(Math.pow(2, 4));

//! ECMAScript 2017 / ES8

//* async await

//* string padding
// let message = 'Fahim Faysal'.padStart(15);
// console.log(message);
// message = 'Fahim Faysal'.padEnd(15);
// console.log(message);
// let num = '1436'.padStart(7, '0');
// console.log(num);

//* object.values() & object.entries()
// const person = { name: 'Fahim', age: '23' };
// console.log(person);
// console.log(Object.values(person));
// console.log(Object.entries(person)); return an array

//! ECMAScript 2018 / ES9

//* Rest/Spread operator use in object & array
// const person = { name: 'Fahim', age: '23', degree: 'BSc' };
// const sperson = { ...person };
// console.log(person);
// console.log(sperson);

//! ECMAScript 2019 / ES10

//* flatten an array
// let arr = [
//   ['z1', 'z2'],
//   ['z3', 'z4'],
//   ['z5', ['z6', 'z7']],
// ];
// let newArr = arr.reduce((acc, value) => acc.concat(value));
// console.log(arr.flat());
// console.log(arr.flat(2));
// console.log(arr.flat(Infinity));

//* flatmap.

//*Object.fromEntries() return an object
// const person = { name: 'Fahim', age: '23' };
// const arrObj = Object.entries(person);
// console.log(Object.fromEntries(arrObj));

//* trimStart() & trimEnd()

//! ECMAScript 2020 / ES11

//* BigInt (range pow(2,53)-1)
// let number = Number.MAX_SAFE_INTEGER;
// console.log(number);
// number = 9007199254740991n + 100n;
// console.log(number);
// console.log(typeof number);

//* dynamic import (await import)

//* Nullish Coalescing
// console.log(false ?? 'some truthy value');
// console.log(undefined ?? 'some truthy value');
// console.log(null ?? 'some truthy value');
// console.log(NaN ?? 'some truthy value');

// let arr = [0, 8, 7, 4, 5];
// console.log(arr[5]);
// console.log(`${arr[5] ?? arr[0]}`);
