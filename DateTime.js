//? ---------------- Date & Time -----------------
//GMT = GreenWich Mean Time

// let currentDate = new Date();
// console.log(currentDate);
// console.log(new Date());
// console.log(new Date().toLocaleString());
// console.log(new Date().toString());
// console.log(Date.now());

//! 7 arguments
// var date = new Date(2021, 2, 3, 15, 54, 30, 0);
// console.log(date);
// console.log(date.toLocaleString());

// var date = new Date(2021, 2, 6);
// console.log(date.toLocaleString());

// var date = new Date(2021);
// console.log(date.toLocaleString()); DO NOT WORK CORRECTLY

// var date = new Date(2021, 0);Must provide month as a argument and one more argument.
// console.log(date.toLocaleString());

//* new Date(dateString)
// var date = new Date('October 13, 2021 11:13:00');
// console.log(date.toLocaleString());

//! new Date(milliseconds)

// var date = new Date(0);
// console.log(date.toLocaleString());

// var date = new Date(Date.now());
// console.log(Date.now());
// console.log(date.toLocaleString());

//! Dates Method
const currentDate = new Date();

//* how to get the individual date
// console.log(currentDate.toLocaleString());
// console.log(currentDate.getFullYear());
// console.log(currentDate.getMonth()); // 0 - 22 jan to dec
// console.log(currentDate.getDate());
// console.log(currentDate.getDay());

//* how to set the individual date
// console.log(currentDate.toLocaleString());
// console.log(currentDate.setFullYear(2021));
// console.log(currentDate.setMonth(10)); //0-22 jan to dec
// console.log(currentDate.setDate(5));

//! Time Methods
const currentTime = new Date();

//* how to get the individual time
// console.log(currentTime.getTime());
// console.log(currentTime.getHours());
// console.log(currentTime.getMinutes());
// console.log(currentTime.getSeconds());
// console.log(currentTime.getMilliseconds());

//* how to get the individual time
// console.log(currentTime.setTime());
// console.log(currentTime.setHours(5));
// console.log(currentTime.setMinutes(5));
// console.log(currentTime.setSeconds(5));
// console.log(currentTime.setMilliseconds(5));

//! Awesome part
//* Live Time
// function myFunction() {
//   var time = new Date();
//   time.setHours(5);
//   document.getElementById('demo').innerHTML = time;
// }
// (function () {
//   setInterval(() => {
//     var time = new Date().toLocaleTimeString();
//     document.getElementById('demo').innerHTML = time;
//   }, 1000);
// })();

//* Only Time or Date
// console.log(new Date().toLocaleTimeString()); // 5:43:01 PM
// console.log(new Date().toLocaleDateString()); // 3/3/2021
// console.log(new Date().toLocaleString()); // 3/3/2021, 5:43:01 PM
