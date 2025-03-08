// function sum(p, p1, p2) {
// //   console.log(p, p1, p2);
//     console.log(arguments); // it is array like object--
//     const array = [...arguments];
//     console.log(array);
// }

// sum(19, 29, 39, 29, 35, 34, 24, 33);

// console.log(typeof sum);
// console.log(sum.length);

// let a = 10;
// let b = 20;

// function name(p1, p2) {
//     p1 = 60;
// }
// name(a, b);
// console.log(a);

// const fullName = {
//     name: 'dip',
//     age: 23
// }
// function copy(obj) {
//     obj.name = 'san'
//     return obj;
// }
// console.log(copy(fullName));

const changeName = (obj) => {
    obj.name = 'karim';
    obj.age = 27;
    obj.isMarried = false;
    return obj;
}
const person = {
    name: 'rahim',
    age: 25,
    isMarried: true
}
;
console.log(changeName(person));
console.log(person);