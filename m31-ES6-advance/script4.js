const products = [
  {
    id: 1,
    name: "iphone",
    color: "gold",
    price: "1100",
    brand: "apple",
  },
  { id: 2, name: "samsung", color: "gold", price: 900, brand: "sam" },
  { id: 3, name: "vivo", color: "white", price: 800, brand: "vivo" },
  { id: 4, name: "xiaomi", color: "black", price: 1200, brand: "xiaomi" },
  { id: 5, name: "vivo", color: "white", price: 450, brand: "vivo" },
  { id: 6, name: "nokia", color: "white", price: 450, brand: "nokia" },
];

// products.forEach((n) => {
//   if (n.color === "white") {
//       console.log(n);
//   }
// });

// const newProducts = products.filter(n => n.price > 1000);
// console.log(newProducts);

// const product = products.find(n => n.color === 'white');
// console.log(product); // just find the first value---

const newProducts = products.filter(n => n.id !== 3);
console.log(newProducts);