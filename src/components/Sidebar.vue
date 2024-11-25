<template>
  <div 
    class="sidebar bg-white shadow-sm p-3" 
    :class="{ collapsed: isCollapsed, active: isMobileActive }"
  >
    <h5 class="mb-3">Categories</h5>
    <div class="list-group">
      <div v-for="category in categories" :key="category.name" class="category-item">
        <a 
          href="#" 
          class="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
          @mouseenter="showSubcategories(category.name)"
        >
          {{ category.name }}
          <i class="bi bi-chevron-right"></i>
        </a>
        <div class="subcategories shadow" v-if="activeCategory === category.name">
          <div v-for="sub in category.subcategories" :key="sub.name" class="subcategory-item">
            <a 
              href="#" 
              class="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
              @mouseenter="showSubSubcategories(sub.name)"
            >
              {{ sub.name }}
              <i class="bi bi-chevron-right"></i>
            </a>
            <div class="sub-subcategories shadow" v-if="activeSubcategory === sub.name">
              <a 
                v-for="subsub in sub.items" 
                :key="subsub"
                href="#" 
                class="list-group-item list-group-item-action"
              >
                {{ subsub }}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

interface Subcategory {
  name: string;
  items: string[];
}

interface Category {
  name: string;
  subcategories: Subcategory[];
}

export default defineComponent({
  name: 'Sidebar',
  props: {
    isCollapsed: {
      type: Boolean,
      default: false
    },
    isMobileActive: {
      type: Boolean,
      default: false
    }
  },
  setup() {
    const categories: Category[] = [
      {
        name: 'Electronics',
        subcategories: [
          {
            name: 'Phones',
            items: ['iPhone', 'Samsung', 'Xiaomi']
          },
          {
            name: 'Computers',
            items: ['Laptops', 'Desktops', 'Tablets']
          }
        ]
      },
      {
        name: 'Clothing',
        subcategories: [
          {
            name: 'Men',
            items: ['Shirts', 'Pants', 'Shoes']
          },
          {
            name: 'Women',
            items: ['Dresses', 'Tops', 'Accessories']
          }
        ]
      }
    ]

    const activeCategory = ref('')
    const activeSubcategory = ref('')

    const showSubcategories = (category: string) => {
      activeCategory.value = category
    }

    const showSubSubcategories = (subcategory: string) => {
      activeSubcategory.value = subcategory
    }

    return {
      categories,
      activeCategory,
      activeSubcategory,
      showSubcategories,
      showSubSubcategories
    }
  }
})
</script>

<style scoped>
.category-item {
  position: relative;
}

.subcategories {
  position: absolute;
  left: 100%;
  top: 0;
  width: 200px;
  background: white;
  display: none;
  border: 1px solid rgba(0,0,0,0.1);
  border-radius: 4px;
}

.category-item:hover .subcategories {
  display: block;
}

.subcategory-item {
  position: relative;
}

.sub-subcategories {
  position: absolute;
  left: 100%;
  top: 0;
  width: 200px;
  background: white;
  display: none;
  border: 1px solid rgba(0,0,0,0.1);
  border-radius: 4px;
}

.subcategory-item:hover .sub-subcategories {
  display: block;
}

.list-group-item {
  position: relative;
}

/* 确保下拉菜单不会被截断 */
.sidebar {
  overflow: visible !important;
}
</style>