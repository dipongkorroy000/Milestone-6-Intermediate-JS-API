const loadData = () => {
  fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.log(error));
};

// loadData();

// const fetchData = () => {
//   return new Promise((resolve, reject) => {
//     const status = false;
//     if (status) {
//       resolve({ name: "hero" })
//     } else {
//       reject("server error")
//     }
//   });
// };

// fetchData()
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));

//alternative--
const fetchData = () => {
  return new Promise((resolve, reject) => {
    const status = true;
    if (status) {
      const mockData = {
        json: () => Promise.resolve({ name: "hero" }),
      };
      resolve(mockData);
    } else {
      reject("server error");
    }
  });
};

fetchData()
  .then((res) => res.json())
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
