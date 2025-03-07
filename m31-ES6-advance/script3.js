// const numbers = [1, 2, 3, 4, 5, 6, 7];

// let temp = [];
// for (let i = 0; i < numbers.length; i++){
//     const sum = numbers[i] + 1;
//     temp.push(sum);
// }
// console.log(temp);
// //alternative---
// const newArray = numbers.map(n => {
//     return n + 1
// });
// console.log(newArray);

//or---
// const numbers = [1, 2, 3, 4, 5, 6, 7];
// const element = numbers.map(n => {
//     return n * n;
// });
// console.log(element);

const friends = ['rahim', 'rana', 'sohel', 'rakib', 'sabbir'];
const allFriends = friends.map((num, defaultIndex) => {
    console.log(defaultIndex, num);
})