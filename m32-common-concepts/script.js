//primitive--
// immutable ---example--
let person = 'dipongkorroy';
let newPerson = person;
person = 'hero alom';

console.log(newPerson); 

//non-primitive--
//mutable--example--
let personObj = { name: 'dipongkorroy' };
let newPersonSub = personObj;
personObj.name = 'dip';

console.log(newPersonSub);
