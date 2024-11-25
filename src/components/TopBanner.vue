<template>
  <div class="top-banner bg-white shadow-sm" :class="{ collapsed: isCollapsed }">
    <!-- Ad Carousel -->
    <div id="adCarousel" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-inner position-relative">
        <div class="carousel-item active">
          <div class="p-2 bg-primary text-white text-center">
            Special Offer: 20% off on all items!
            <button class="btn-close btn-close-white position-absolute top-50 end-0 translate-middle-y me-2" @click="closeAd"></button>
          </div>
        </div>
        <div class="carousel-item">
          <div class="p-2 bg-success text-white text-center">
            Free shipping on orders over $50!
            <button class="btn-close btn-close-white position-absolute top-50 end-0 translate-middle-y me-2" @click="closeAd"></button>
          </div>
        </div>
      </div>
    </div>

    <!-- Navigation Bar -->
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <button class="navbar-toggler" type="button" @click="$emit('toggle-sidebar')">
          <span class="navbar-toggler-icon"></span>
        </button>
        
        <div class="collapse navbar-collapse" id="navbarContent">
          <ol class="breadcrumb mb-0 me-auto">
            <li class="breadcrumb-item dropdown">
              <a href="#" class="dropdown-toggle text-decoration-none" data-bs-toggle="dropdown">
                Home
              </a>
              <ul class="dropdown-menu">
                <li class="dropend">
                  <a class="dropdown-item dropdown-toggle" href="#" data-bs-toggle="dropdown">Electronics</a>
                  <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">Phones</a></li>
                    <li><a class="dropdown-item" href="#">Laptops</a></li>
                  </ul>
                </li>
                <li class="dropend">
                  <a class="dropdown-item dropdown-toggle" href="#" data-bs-toggle="dropdown">Fashion</a>
                  <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">Men</a></li>
                    <li><a class="dropdown-item" href="#">Women</a></li>
                  </ul>
                </li>
              </ul>
            </li>
            <li class="breadcrumb-item active">Products</li>
          </ol>
          
          <div class="d-flex align-items-center">
            <button class="btn btn-outline-primary me-2">Login</button>
            <button class="btn btn-outline-secondary" @click="toggleBanner">
              <i class="bi" :class="isCollapsed ? 'bi-chevron-down' : 'bi-chevron-up'"></i>
            </button>
          </div>
        </div>
      </div>
    </nav>
  </div>

  <button 
    class="btn btn-primary restore-banner shadow" 
    :class="{ visible: isCollapsed }"
    @click="toggleBanner"
  >
    <i class="bi bi-chevron-down"></i>
    Show Banner
  </button>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'TopBanner',
  emits: ['banner-toggle', 'toggle-sidebar'],
  setup(_, { emit }) {
    const isCollapsed = ref(false)
    const isAdVisible = ref(true)

    const toggleBanner = () => {
      isCollapsed.value = !isCollapsed.value
      emit('banner-toggle', isCollapsed.value)
    }

    const closeAd = () => {
      const carousel = document.getElementById('adCarousel')
      if (carousel) {
        carousel.style.display = 'none'
      }
    }

    return {
      isCollapsed,
      isAdVisible,
      toggleBanner,
      closeAd
    }
  }
})
</script>