const person = {
    fullName: "sand",
    age: 10,
    friends: ["rakib", "sakib"]
}
console.log(typeof person);
console.log(person);

const newPerson = JSON.stringify(person);
console.log(typeof newPerson);
console.log(newPerson);

const newPerson2 = JSON.parse(newPerson);
console.log(typeof newPerson2);
console.log(newPerson2);