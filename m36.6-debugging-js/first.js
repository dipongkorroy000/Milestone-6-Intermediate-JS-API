// console.log('name');
// confirm.log(fullName);
// console.log('find');

const status = 'okay not';
try {
//   console.log("first number enter");
//   confirm.log(fullName);
//     console.log("find");
    if (status === 'okay') {
        console.log('okay, well print this');
    } else {
        throw 'not okay, not print this';
    }
}
catch (error) {
    console.log(error);// all error showing--
//   console.log(error.name);// error name--
//   console.log(error.message);//error message--
}
finally {
    // console.log('second number enter');
}
