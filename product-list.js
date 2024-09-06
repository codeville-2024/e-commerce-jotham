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

const video = document.getElementById("videos-container");

products.forEach((product) => {
  const productElement = document.createElement("div");
  video.appendChild(productElement);
  productElement.id = "accesories";
  productElement.innerHTML = `<img src= "${product.image}"/>
  <p>${product.name}</p>
  <p>${product.price}</p>
  <p>${product.rating}</p>
  `;
  productElement.textContent = product.name;

  video.innerHTML += `
      <iframe
          width="420"
          height="315"
          src="${product.src}"
          allowfullscreen
        >
      </iframe>
    `;

  // declare productId as a block-scoped variable
  let productId = product.id;

  productElement.addEventListener("click", () => {
    // redirect to the details page with the product ID as a parameter

    window.location.href = `details.html?id=${productId}`;
  });

  productList.appendChild(productElement);
});
