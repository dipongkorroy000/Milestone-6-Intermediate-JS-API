const loadData = async () => {
    try {
        console.log("first line");
        console.log("second line");
        console.log("third line");
      
        //asynchronous task--
        // fetch('https://jsonplaceholder.typicode.com/todos/1')
        //     .then(res => res.json())
        //     .then(data => console.log(data))
        // alternative synchronous task--
        const apiUrl = await fetch("https://jsonplaceholder.typicode.com/todos/1");
        const data = await apiUrl.json();
        console.log(data);
      
        console.log("four line");
        console.log("five line");
    }
    catch {
        console.log('error');
    }
};

loadData();

// normal functions async use for---
async function faDataN() {
    const apiUrl = await fetch('');
    const data = await apiUrl.json();
    console.log(data);
}
// faDataN();
