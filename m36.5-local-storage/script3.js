const productDisplay = (productName, quantity) => {
  const ul = document.getElementById("product-details");
  const listItem = document.createElement("li");
  listItem.innerText = `${productName}: ${quantity}`;
  ul.appendChild(listItem);
};

const addToCart = () => {
  const productName = document.getElementById("product-name");
  const productQuantity = document.getElementById("product-quantity");
  const name = productName.value;
  const quantity = productQuantity.value;

  productDisplay(name, quantity);
  addLocalStorage(name, quantity);

  productName.value = "";
  productQuantity.value = "";
};

const addLocalStorage = (name, quantity) => {
  let cart = {};
  const getProduct = localStorage.getItem("cart");
  if (getProduct) {
    cart = JSON.parse(getProduct);
  }

  console.log(cart);
  cart[name] = quantity;
  console.log(cart);

  localStorage.setItem("cart", JSON.stringify(cart));
};

const productDisplayFormLocalStorage = () => {
  let cart = {};
  const getProduct = localStorage.getItem("cart");
  if (getProduct) {
    cart = JSON.parse(getProduct);
  }

  for (const product in cart) {
    // console.log(product);
    //   console.log(cart[product]);
      productDisplay(product, cart[product]);
  }
};
productDisplayFormLocalStorage();
