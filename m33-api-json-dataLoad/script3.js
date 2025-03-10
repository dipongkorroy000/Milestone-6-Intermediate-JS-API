const loadData = () => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => console.log(json));
}

const loadUser = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => {
            // console.log(data)
            displayUser(data)
    })
}

const displayUser = (users) => {
    console.log(users[0])
}