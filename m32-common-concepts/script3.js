// data type- problem for == implicit conversion--
const n1 = 10;
const n2 = '10';
if (n1 == n2) {
    console.log('this is equal value');
}
else {
    console.log('this is unequal')
}

const num1 = true;
const num2 = 1;
if (num1 == num2) {
    console.log('this is equivalent value');
}
else {
    console.log('this is uneven');
}


// js cannot compare arrays--
const p = [];
const f = [];
if (p == f) {
    console.log('this is equal value');
}
else {
    console.log('this is unequal value');
}

const j = [];
const k = [];
if (j === k) {
    console.log('this is equal value');
}
else {
    console.log('this is unequal value');
}

if (5 * '2' === 10) {
    console.log('this is equal value');
}
else {
    console.log('this is unequal value');
}


 