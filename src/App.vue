<template>
  <TopBanner 
    @banner-toggle="handleBannerToggle"
    @toggle-sidebar="isMobileActive = !isMobileActive"
  />
  <Sidebar 
    :is-collapsed="isCollapsed"
    :is-mobile-active="isMobileActive"
  />
  <ProductGrid :is-collapsed="isCollapsed" />
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import TopBanner from './components/TopBanner.vue'
import Sidebar from './components/Sidebar.vue'
import ProductGrid from './components/ProductGrid.vue'

export default defineComponent({
  name: 'App',
  components: {
    TopBanner,
    Sidebar,
    ProductGrid
  },
  setup() {
    const isCollapsed = ref(false)
    const isMobileActive = ref(false)

    const handleBannerToggle = (collapsed: boolean) => {
      isCollapsed.value = collapsed
    }

    return {
      isCollapsed,
      isMobileActive,
      handleBannerToggle
    }
  }
})
</script>