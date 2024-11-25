import { Product } from '../types/Product';

const products: Product[] = [
  { id: 1, name: 'Product 1', price: 99.99, image: 'https://via.placeholder.com/200' },
  { id: 2, name: 'Product 2', price: 149.99, image: 'https://via.placeholder.com/200' },
  { id: 3, name: 'Product 3', price: 199.99, image: 'https://via.placeholder.com/200' },
  { id: 4, name: 'Product 4', price: 299.99, image: 'https://via.placeholder.com/200' },
];

export function createProductGrid(): string {
  return `
    <div class="main-content">
      <!-- Filters -->
      <div class="bg-white shadow-sm p-3 mb-3">
        <div class="row align-items-center">
          <div class="col-md-4">
            <select class="form-select">
              <option>Sort by: Featured</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Newest First</option>
            </select>
          </div>
          <div class="col-md-8">
            <div class="d-flex gap-2">
              <button class="btn btn-outline-secondary">Filter</button>
              <button class="btn btn-outline-secondary">Price Range</button>
              <button class="btn btn-outline-secondary">Availability</button>
            </div>
          </div>
        </div>
      </div>

      <!-- Products Grid -->
      <div class="product-grid">
        ${products.map(product => `
          <div class="product-card card h-100">
            <img src="${product.image}" class="card-img-top" alt="${product.name}">
            <div class="card-body">
              <h5 class="card-title">${product.name}</h5>
              <p class="card-text">$${product.price}</p>
              <button class="btn btn-primary w-100">Add to Cart</button>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}