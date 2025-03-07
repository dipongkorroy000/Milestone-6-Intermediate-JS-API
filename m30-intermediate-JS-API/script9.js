const person = {
    name: 'rakib',
    age: 10,
    country: 'BD'
}

// for (let key in person) {
//     console.log(`key: ${key} value: ${person[key]}`);
// }
//alternative---
for (let [key,value] of Object.entries(person)){
    console.log(`key ${key} value: ${value}`);
}