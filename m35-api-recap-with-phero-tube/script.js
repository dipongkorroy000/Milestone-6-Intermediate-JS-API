const dataApi = () => {
    fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
        .then(res => res.json())
        .then(data => btnCategory(data.categories))
}
const btnCategory = (d) => {
    console.log(d)
}

dataApi();