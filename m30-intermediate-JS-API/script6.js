//spread operator---
// const friends = ['rahima', 'karima', 'jorina'];
// const addFriends = ['hena', ...friends];
// console.log(addFriends);

// const numbers = [1, 4, 3, 6, 8, 9, 24, 23, 7, 2, 15];
// console.log(Math.max(...numbers));

//object rule--
// const rakib = {
//     fullName: 'rakib islam',
//     age: 22,
//     friends: ['rana', 'raju', 'saju'],
//     status: 'not found'
// }
// const bgName = bg.fullName;
// const bgAge = bg.age;
// const bgFriends = bg.friends;
// const bgStatus = bg.status;
//alternative---
// const { fullName, age, friends, status } = rakib;
// console.log(fullName);


//array rule--
// const person = ['rakib', { name: 'dip' }, 'hena', 'sakib'];
// const [name1] = person;
// console.log(name1);

let a = 12, b = 3;
[a, b] = [b, a];
console.log(a,b)
