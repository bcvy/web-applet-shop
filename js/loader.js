async function loadProducts() {
  try {
    const response = await fetch('data/products.json');
    const products = await response.json();
    const container = document.getElementById('products-container');

    products.forEach(product => {
      const card = document.createElement('div');
      card.className = 'product-card';

      card.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>${product.description}</p>
        <a href="${product.link}" class="buy-button" target="_blank">Buy now</a>
      `;

      container.appendChild(card);
    });
  } catch (error) {
    console.error('Error loading products:', error);
  }
}

document.addEventListener('DOMContentLoaded', loadProducts);