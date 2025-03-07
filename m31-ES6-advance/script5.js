const products = [
    { id: 1, name: "iphone12", color: "gold", price: "1100", brand: "apple", },
    { id: 2, name: "samsung", color: "gold", price: 900, brand: "sam" },
    { id: 3, name: "vivo", color: "white", price: 800, brand: "vivo" },
    { id: 4, name: "iphone8", color: "gold", price: "1100", brand: "apple", },
    { id: 5, name: "xiaomi", color: "black", price: 1200, brand: "xiaomi" },
    { id: 6, name: "vivo", color: "white", price: 450, brand: "vivo" },
    { id: 7, name: "nokia", color: "white", price: 450, brand: "nokia" },
    { id: 8, name: "iphone6", color: "gold", price: "1100", brand: "apple" },
];

// const newProducts = products.map(n => {
//     if (n.brand === 'vivo') {
//         n.price += 100;
//     }
//     return n;
// });
// console.log(newProducts);

// products.forEach(n => {
//     console.log(n);
// })

const newProducts = products.filter(n => {
    if (n.name === 'vivo') {
        console.log(n);
    }
});


// const singleProduct = products.find(n => {
//     if (n.id === 3) {
//         console.log(n);
//     }
// });


