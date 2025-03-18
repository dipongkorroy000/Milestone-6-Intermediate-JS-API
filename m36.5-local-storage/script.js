document.getElementById('button').addEventListener('click', function () {
  Swal.fire({
    title: "Good job!",
    text: "You clicked the button!",
    icon: "success"
  })
});


// const age = 10;
// localStorage.setItem('age', age);

// const fullName = 'sanjida';
// localStorage.setItem('fullName', fullName);
// console.log(localStorage.getItem('name'));

const addLocalStorage = () => {
  const fullName = 'dip';
  localStorage.setItem('name', fullName); 
}

const addLocalStorageObj = () => {
  const person = {
    name: 'sanjida',
    age: 20,
    status: 'student',
    isMarried: true,
    brother:['murad']
  }
  // localStorage.setItem('sanjida',person);
  // console.log(person.toString());

  const convertToString = JSON.stringify(person);
  // console.log(typeof convertToString);
  localStorage.setItem('sanjida', convertToString);
}

const data = localStorage.getItem('sanjida');
console.log(data);
const convertToObj = JSON.parse(data);
console.log(convertToObj);