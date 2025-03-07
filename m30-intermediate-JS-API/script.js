// let fullName = 'north  \n & \n east';
// console.log(fullName);
// alternative--
// let fullName = `north
// &
// east`;
// console.log(fullName); //that's backTic is template string-

// function sum(num1, num2) {
//     console.log(arguments); //defined arguments--
//     return num1 + num2;
// }
// sum(10, 20);
// //alternative---
// const sum2 = function (num1, num2) {
//     return num1 + num2;
// }

// //arrow function---
// const sum3 = (num1, num2) => {
//     console.log(arguments);//not defined - this arrow function--
//     return num1 + num2
// };
// console.log(sum3(10,20));

//or--
// const test = () => console.log('hello empty');
// test();
//alternative--
// const test = (x) => x * x;
// console.log(test(3));
//alternative--
// const sum = (n1, n2) => n1 + n2;
// console.log(sum(10, 20));

document.getElementById('title').addEventListener('click', (event) => {
    console.log(event);
})
