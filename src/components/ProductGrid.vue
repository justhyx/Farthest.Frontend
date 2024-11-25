<template>
  <div class="main-content" :class="{ collapsed: isCollapsed }">
    <!-- Filters -->
    <div class="bg-white shadow-sm p-3 mb-3">
      <div class="row align-items-center">
        <div class="col-md-4">
          <select class="form-select" v-model="sortBy">
            <option v-for="option in sortOptions" :key="option.value" :value="option.value">
              {{ option.label }}
            </option>
          </select>
        </div>
        <div class="col-md-8">
          <div class="d-flex gap-2">
            <button 
              v-for="filter in filters" 
              :key="filter"
              class="btn btn-outline-secondary"
            >
              {{ filter }}
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Products Grid -->
    <div class="product-grid">
      <div 
        v-for="product in sortedProducts" 
        :key="product.id"
        class="product-card card h-100"
      >
        <div class="position-relative">
          <img :src="product.image" class="card-img-top" :alt="product.name">
          <button 
            class="btn btn-primary rounded-circle cart-btn" 
            @click="addToCart(product)" 
            title="Add to Cart"
          >
            <i class="bi bi-cart-plus"></i>
          </button>
        </div>
        <div class="card-body">
          <h5 class="card-title product-name">{{ product.name }}</h5>
          <div class="price-container">
            <div class="original-price text-decoration-line-through text-muted mb-1">
              ${{ product.originalPrice.toFixed(2) }}
            </div>
            <div class="d-flex align-items-center">
              <span class="sale-price text-danger">
                ${{ product.price.toFixed(2) }}
              </span>
              <span class="discount-badge ms-2">
                -{{ calculateDiscount(product.originalPrice, product.price) }}%
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue'

interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice: number;
  image: string;
}

export default defineComponent({
  name: 'ProductGrid',
  props: {
    isCollapsed: {
      type: Boolean,
      default: false
    }
  },
  setup() {
    const products: Product[] = [
      { id: 1, name: 'Product 1', price: 79.99, originalPrice: 99.99, image: 'https://via.placeholder.com/200' },
      { id: 2, name: 'Product 2', price: 119.99, originalPrice: 149.99, image: 'https://via.placeholder.com/200' },
      { id: 3, name: 'Product 3', price: 159.99, originalPrice: 199.99, image: 'https://via.placeholder.com/200' },
      { id: 4, name: 'Product 4', price: 239.99, originalPrice: 299.99, image: 'https://via.placeholder.com/200' }
    ]

    const sortBy = ref('featured')
    const sortOptions = [
      { value: 'featured', label: 'Sort by: Featured' },
      { value: 'price-asc', label: 'Price: Low to High' },
      { value: 'price-desc', label: 'Price: High to Low' },
      { value: 'newest', label: 'Newest First' }
    ]

    const filters = ['Filter', 'Price Range', 'Availability']

    const sortedProducts = computed(() => {
      const productsCopy = [...products]
      switch (sortBy.value) {
        case 'price-asc':
          return productsCopy.sort((a, b) => a.price - b.price)
        case 'price-desc':
          return productsCopy.sort((a, b) => b.price - a.price)
        default:
          return productsCopy
      }
    })

    const calculateDiscount = (original: number, sale: number) => {
      return Math.round(((original - sale) / original) * 100)
    }

    const addToCart = (product: Product) => {
      console.log('Adding to cart:', product)
    }

    return {
      sortBy,
      sortOptions,
      filters,
      sortedProducts,
      calculateDiscount,
      addToCart
    }
  }
})
</script>

<style scoped>
.cart-btn {
  width: 36px;
  height: 36px;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 0.5rem;
  right: 0.5rem;
  opacity: 0.9;
}

.cart-btn:hover {
  opacity: 1;
}

.discount-badge {
  background-color: #dc3545;
  color: white;
  padding: 2px 6px;
  border-radius: 4px;
  font-size: 0.875rem;
}

.price-container {
  font-size: 1rem;
}

.sale-price {
  font-weight: bold;
  font-size: 1.1rem;
}

.product-name {
  font-size: 0.95rem;
  height: 2.8em;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  margin-bottom: 0.8em;
}
</style>