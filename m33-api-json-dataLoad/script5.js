const loadUser2 = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => {
        showUser(data)
    })
}

const showUser = (para) => {
    const userContainer = document.getElementById('user-ul')
    for (let n of para) {
        console.log(n.name)
        const li = document.createElement('li');
        li.innerText = n.name;
        userContainer.appendChild(li);
    }
}