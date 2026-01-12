const productPromise = await fetch('https://fakestoreapi.com/products/1');
const products = await productPromise.json();

console.log(products);

/* JS is slow adding/removing elems from the DOM */
