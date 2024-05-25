function getAllData() {
  const promise = new Promise((resolve, reject) => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((res) => res.products)
      .then((res) => resolve(res))
      .catch((err) => reject(err));
  });
  return promise;
}

let products = getAllData();
products.then((res) => console.log(res));
