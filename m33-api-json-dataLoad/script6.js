const postBtn = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => {
            displayPost(data)
    })
}
// postBtn();

const displayPost = (content) => {
    // console.log(content)
    const divId = document.getElementById('div-id');
    for (let n of content) {
        const div = document.createElement('div');
        div.classList.add('cart-style')
        div.innerHTML = `
        <h1>${n.title}</h1>
        <p>${n.body}</p>
        <button>Details</button>
        `;
        divId.appendChild(div);
        
    }

}