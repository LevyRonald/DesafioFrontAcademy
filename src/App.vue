<template>
<div>
  <meu-menu><img src="./assets/logo.svg" alt=""></meu-menu>
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
</style>
