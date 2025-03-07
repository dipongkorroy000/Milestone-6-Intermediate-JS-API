const person = {
    name: 'sohel',
    age: 30,
    friends: ['korim', 'rahim', 'saju', 'raju'],
    details: {
        job: 'yes',
        isMarried: true,
        1:'point',
        status: 'not found',
        father: {
            name: 'abbas ali'
        }
    }
}

console.log(person.details.father.name);
console.log(person.details.mother?.name);// this is undefined--

console.log(person['details']['father']['name']);
console.log(person['details'][1]); // 1 can't access without bracket notation--
