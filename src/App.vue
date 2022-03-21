<template>
<div>
  <meu-menu><img src="./assets/logo.svg" alt=""></meu-menu>
  <portfolio class="portfolio"><img src="./assets/manager.svg" alt=""></portfolio>
</div>
</template>

<script>
import menu from './components/shared/menu/menu.vue'
import portfolio from './components/portfolio/portfolio.vue'
export default {
      components: {
    'meu-menu' : menu,
    'portfolio': portfolio
    
  },
}
</script>

<style>
.portfolio{
  display: none;
}
</style>
