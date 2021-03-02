//? ----------------- Array -------------------

// var myFriends = new Array(); //! optional
// var myFriends = ['fahim', 'faysal', 'nasif', 'ffn'];
// console.log(myFriends[1]);
// console.log(myFriends);
// console.log('\n');
// console.log(myFriends.length);
// var myFriends = ['fahim', 'faysal', 'nasif', 'ovi', 'navel'];

//! ------------ Traverse of an Array ----------------

//* for in loop
// for (elements in myFriends) {
//   console.log(elements);
// }
// console.log('\n');

//* for of loop
// for (elements of myFriends) {
//   console.log(elements);
// }
// console.log('\n');

//* forEach loop
// myFriends.forEach(function (element, index, array) {
//   console.log(element);
// });
// console.log('\n');

//* forEach loop & fat arrow
// myFriends.forEach((element, index, array) => console.log(element));
// console.log('\n');

//! --------- Search & Filter of an Array -----------

//* indexOf()
// var myFriends = ['fahim', 'faysal', 'nasif', 'ffn'];
// console.log(myFriends.indexOf('faysal', 2));
// console.log(myFriends.indexOf('faysal'));

//* lastIndexOf()
// var myFriends = ['fahim', 'faysal', 'nasif', 'ffn'];
// console.log(myFriends.lastIndexOf('faysal', 2));
// console.log(myFriends.lastIndexOf('faysal'));

//* includes()
// var myFriends = ['fahim', 'faysal', 'nasif', 'ffn'];
// console.log(myFriends.includes('faysal'));
// console.log(myFriends.includes('faysal', 2));

//* find()
// const prices = [200, 250, 300, 350, 400, 450, 500, 550, 600];
// console.log(prices.find((element) => element > 300));
// console.log(prices.find((element) => element > 700));

//* findIndex()
// const prices = [200, 250, 300, 350, 400, 450, 500, 550, 600];
// console.log(prices.findIndex(element => element > 300));
// console.log(prices.findIndex(element => element > 700));

//* filter()
// const prices = [200, 250, 300, 350, 400, 450, 500, 550, 600];
// console.log(prices.filter((element, index) => element <= 400));
// console.log(prices.filter((element, index) => element > 1400));

//! ----------- Sort & Compare an Array -----------

//* string sort / default sort
// const months = ['feb', 'april', 'march', 'dec', 'nov'];
// console.log(months.sort());
// const arr = [47, 123, 4000, 2, 9];
// console.log(arr.sort());

//* number sort in ascending
// const arr = [47, 123, 4000, 2, 9];
// console.log(
//   arr.sort(function (a, b) {
//     return a - b;
//   })
// );
// console.log(arr.sort((a, b) => a - b));

//* number sort in descending using compare
// const arr = [47, 123, 4000, 2, 9];
// console.log(arr.sort((a, b) => b - a));

//* sort in random order
// const arr = [47, 123, 4000, 2, 9];
// console.log(arr.sort((a, b) => 0.5 - Math.random()));

//* fisher yates shuffle(random order)
// const arr = [47, 123, 4000, 2, 9];
// for (let i = arr.length - 1; i > 0; i--) {
//   let j = Math.floor(Math.random() * i);
//   let k = arr[i];
//   arr[i] = arr[j];
//   arr[j] = k;
// }
// console.log(arr);

//* reverse
// const arr = [47, 123, 4000, 2, 9];
// console.log(arr.sort());
// console.log(arr.reverse());

//* find Max value
// const arr = [47, 123, 4000, 2, 9];
// function Max(arr) {
//   return Math.max.apply(null, arr);
// }
// const arr = [47, 123, 4000, 2, 9];
// const max = arr => Math.max.apply(null, arr);
// console.log(max(arr));

//* find Max value
// const arr = [47, 123, 4000, 2, 9];
// function Min(arr) {
//   return Math.min.apply(null, arr);
// }
// console.log(Min(arr));

const arr = [47, 123, 4000, 2, 9, -1];
const min = () => Math.min.apply(null, arr);
console.log(min(arr));

//!----------------- CRUD in Array ---------------

//* push() add element in end of an array.
// const animals = ['pigs', 'goats', 'sheep'];
// console.log(animals.push('chicken', 'cow'));
// console.log(animals);

//* unshift() add element in first of an array.
// const animals = ['pigs', 'goats', 'sheep'];
// console.log(animals.unshift('chicken', 'cow'));
// console.log(animals);

//* pop() remove the last element from an array.
// const animals = ['pigs', 'goats', 'sheep', 'chicken', 'cow'];
// console.log(animals.pop());
// console.log(animals);

//* shift() remove the first element from an array.
// const animals = ['pigs', 'goats', 'sheep', 'chicken', 'cow'];
// console.log(animals.shift());
// console.log(animals);

//* CRUD using splice()
// const months = ['feb', 'april', 'march', 'dec', 'nov'];

//* Add last
// console.log(months.splice(months.length, 0, 'dec'));
// console.log(months);

//* Update march to March
// index = months.indexOf('march');
// if (index != -1) {
//   console.log(months.splice(index, 1, 'March'));
//   console.log(months);
// } else {
//   console.log('march not found');
// }

//* remove dec
// index = months.indexOf('dec');
// if (index != -1) {
//   console.log(months.splice(index, 1));
//   console.log(months);
// } else {
//   console.log('march not found');
// }

//! ----------- Map(), Reduce(), Filter() ------------

//* map()
// const array = [1, 4, 9, 16, 25];
// let newArray = array.map((currentValue, index, array) => {
//   return currentValue > 9;
// });
// console.log(array);
// console.log(newArray);

// const array = [1, 4, 9, 16, 25];
// let newArray = array.map((currentValue, index, array) => {
//   return `Index no ${index} and the value is ${currentValue} belong to ${array}`;
// });
// console.log(array);
// console.log(newArray);

//* diff between forEach & map
// const array = [1, 4, 9, 16, 25];
// let newArray = array.forEach((currentValue, index, array) => {
//   return `Index no ${index} and the value is ${currentValue} belong to ${array}`;
// });
// console.log(array);
// console.log(newArray);

//* Reduce
// let arr = [2, 3, 4, 6, 8];
// console.log(arr.reduce((acc, value) => (acc += value)));

// let arr = [2, 3, 4, 6, 8];
// let newArr = arr.reduce((acc, value) => (acc += value), 7);
// console.log(newArr);

// let arr = [
//   ['z1', 'z2'],
//   ['z3', 'z4'],
//   ['z5', 'z6'],
// ];
// let newArr = arr.reduce((acc, value) => acc.concat(value));
// console.log(newArr);

// let arr = [
//   ['z1', 'z2'],
//   ['z3', 'z4'],
//   ['z5', ['z6', 'z7']],
// ];
// let newArr = arr.reduce((acc, value) => acc.concat(value));
// console.log(newArr);

//* Multiply each element by 2 and return only those elements which are greater than 10 & add those value.
//* chain
// let arr = [2, 3, 4, 6, 8];
// newArr = arr
//   .map(crElm => crElm * 2)
//   .filter(crElm => crElm > 10)
//   .reduce((accumulator, crElm) => (accumulator += crElm));
// console.log(newArr);
