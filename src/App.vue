<template>
<div>
  <meu-menu><img src="./assets/logo.svg" alt=""></meu-menu>
  <home><img src="./assets/Bitmap.png" alt=""></home>
  <meu-footer>
    <img src="./assets/logo_footer.svg" alt="">
    </meu-footer>
</div>
</template>

<script>
import menu from './components/shared/menu/menu.vue'
import portfolio from './components/portfolio/portfolio.vue'
import home from './components/home/home.vue'
import footer from './components/shared/footer/footer.vue'
export default {
      components: {
    'meu-menu' : menu,
    'portfolio': portfolio,
    'home':home,
    'meu-footer':footer
    
  },
}
</script>

<style>
</style>
