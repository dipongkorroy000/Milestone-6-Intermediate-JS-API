// null, undefined, NaN,  0, -0 is falsy value--

const name = ''; 
if (name) {
    console.log('this is truthy value');
}
else {
    console.log('this is falsy value');
}

const product = false;
if (product) {
    console.log('this is truthy value');
}
else {
    console.log('this is falsy value');
}

const number = 0; 
if (number) {
    console.log('this is falsy value');
}
else {
    console.log('this is falsy value');
}

const value = null; 
if (value) {
    console.log('this value is truthy');
}
else {
    console.log('this value is falsy');
}

const fullName = 'dip';
if (!fullName) {
    console.log('this is a falsy value');
}
else if (!!fullName) {
    console.log('this is a truthy value');
}