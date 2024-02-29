const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');
if (bar) {
bar.addEventListener('click', () => {
nav.classList.add('active');
})
if (close) {
close.addEventListener('click', () => {
nav.classList.remove('active');
})
}
}
const featuredProductsSection = document.getElementById("product1");
const featuredProducts = featuredProductsSection.querySelectorAll(".pro");

let currentFeaturedProductIndex = 0;

function showFeaturedProduct(index) {
  featuredProducts.forEach((product, productIndex) => {
    product.classList.remove("active");
    if (productIndex === index) {
      product.classList.add("active");
    }
  });
  currentFeaturedProductIndex = index;
}

// Add buttons or arrows to navigate the carousel
const nextButton = document.createElement("button");
nextButton.textContent = "Next";
nextButton.addEventListener("click", () => {
  showFeaturedProduct((currentFeaturedProductIndex + 1) % featuredProducts.length);
});

const prevButton = document.createElement("button");
prevButton.textContent = "Prev";
prevButton.addEventListener("click", () => {
  showFeaturedProduct((currentFeaturedProductIndex - 1 + featuredProducts.length) % featuredProducts.length);
});

featuredProductsSection.appendChild(nextButton);
featuredProductsSection.appendChild(prevButton);

// Optionally, set up automatic carousel rotation
setInterval(() => {
  showFeaturedProduct((currentFeaturedProductIndex + 1) % featuredProducts.length);
}, 5000); // Change 5000 to adjust the interval (in milliseconds)
