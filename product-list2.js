const products = [
  {
    id: 1,
    name: "Chike And The River",
    price: 19.99,
    image: "images/accesorie.jpg",
    rating: 4.1,
  },
  {
    id: 2,
    name: "Game Of Thrones",
    price: 24.99,
    image: "images/accesorie(1).jpg",
    rating: 4.1,
  },
  {
    id: 3,
    name: "Harry Potter And The Cursed Child",
    price: 19.99,
    image: "images/accesorie(3).jpg",
    rating: 4.1,
  },
  {
    id: 4,
    name: "There Was A Country",
    price: 19.99,
    image: "images/accesorie(4).jpg",
    rating: 4.1,
  },
  {
    id: 5,
    name: "Things Fall Apart",
    price: 19.99,
    image: "images/accesorie(5).jpg",
    rating: 4.1,
  },
];

const urlParams = new URLSearchParams(window.location.search);

const productId = urlParams.get("id");
const view = document.getElementById("view");

// assuming you have a function to retrieve the product details from the array

function getProductDetails(productId) {
  const productx = products.find(
    (productx) => product.id === parseInt(productId)
  );

  if (product) {
    const artImage = document.getElementById("main");
    artImage.src = `${product.image}`;
  } else {
    console.error(`Product with ID ${productId} not found`);
  }
}

getProductDetails(productId);

view.addEventListener("click", () => {
  // redirect to the details page with the product ID as a parameter

  window.location.href = `viewroom.html?id=${productId}`;
});
