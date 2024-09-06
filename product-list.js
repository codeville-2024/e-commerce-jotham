const products = [
  {
    id: 1,
    name: "Male bangle",
    price: 19.99,
    image: "images/accessorie.jpg",
    rating: 4.1,
  },
  {
    id: 2,
    name: "Male bangle",
    price: 24.99,
    image: "images/accessorie(1).jpg",
    rating: 4.1,
  },
  {
    id: 3,
    name: "Male belt",
    price: 19.99,
    image: "images/accessorie(3).jpg",
    rating: 4.1,
  },
  {
    id: 4,
    name: "Girls bag",
    price: 25.0,
    image: "images/accessorie(4).jpg",
    rating: 4.1,
  },
  {
    id: 5,
    name: "Female Bangle",
    price: 19.99,
    image: "images/accessorie(5).jpg",
    rating: 4.1,
  },
  {
    id: 6,
    name: "Female Bangle",
    price: 16.99,
    image: "images/accessorie(6).jpg",
    rating: 4.1,
  },

  {
    id: 7,
    name: "Women clothes",
    price: 19.99,
    image: "images/women.jpg",
    rating: 4.1,
  },

  {
    id: 8,
    name: "Women clothes",
    price: 19.99,
    image: "images/women(1).jpg",
    rating: 4.1,
  },

  {
    id: 9,
    name: "Women clothes",
    price: 19.99,
    image: "images/women(2).jpg",
    rating: 4.1,
  },

  {
    id: 10,
    name: "Men clothes",
    price: 19.99,
    image: "images/men.jpg",
    rating: 4.1,
  },

  {
    id: 11,
    name: "Men clothes",
    price: 19.99,
    image: "images/men(1).jpg",
    rating: 4.1,
  },

  {
    id: 12,
    name: "Men clothes",
    price: 19.99,
    image: "images/men(2).jpg",
    rating: 4.1,
  },
];

const productList = document.getElementById("products-container");

products.forEach((product) => {
  const productElement = document.createElement("div");
  // video.appendChild(productElement);
  productElement.classList.add("product-item");
  productElement.innerHTML = `
  <div class="image-container">
    <img src= "${product.image}"/>
  </div>
  <div class="content">
    <p>${product.name}</p>
    <p>${product.price}</p>
    <p>${product.rating}</p>
  </div>
  `;
  // productElement.textContent = product.name;

  // video.innerHTML += `
  //     <iframe
  //         width="420"
  //         height="315"
  //         src="${product.src}"
  //         allowfullscreen
  //       >
  //     </iframe>
  //   `;

  // declare productId as a block-scoped variable
  let productId = product.id;

  productElement.addEventListener("click", () => {
    // redirect to the details page with the product ID as a parameter

    window.location.href = `details.html?id=${productId}`;
  });

  productList.appendChild(productElement);
});
