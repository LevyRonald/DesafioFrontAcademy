<template>
<div>
  <meu-menu><img src="./assets/logo.svg" alt=""></meu-menu>
  <home><img src="./assets/Bitmap.png" alt=""></home>
</div>
</template>

<script>
import menu from './components/shared/menu/menu.vue'
import portfolio from './components/portfolio/portfolio.vue'
import home from './components/home/home.vue'
export default {
      components: {
    'meu-menu' : menu,
    'portfolio': portfolio,
    'home':home
    
  },
}
</script>

<style>
</style>
