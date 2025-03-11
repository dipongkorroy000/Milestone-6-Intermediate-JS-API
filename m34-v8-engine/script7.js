console.log("first line");
console.log("second line");
console.log("third line");

// setTimeout(() => {
//     console.log('hello World!')
// }, 3000);

//alternative-function-but different behavior -
let count = 0;
const clockId = setInterval(() => {
  // console.log('hello world!')
  count++;
  console.log(count);

  if (5 <= count) {
    clearInterval(clockId);
  }
}, 1000);
// console.log(clockId)

console.log("four line");
console.log("five line");
console.log("six line");
