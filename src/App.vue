<template>
<div>
  <meu-menu><img src="./assets/logo.svg" alt=""></meu-menu>
  <router-view></router-view>
  <meu-footer>
    <img src="./assets/logo_footer.svg" alt="">
    </meu-footer>
</div>
</template>

<script>
import menu from './components/shared/menu/menu.vue'
import portfolio from './components/portfolio/portfolio.vue'
import home from './components/home/home.vue'
import contato from './components/contato/contato.vue'
import footer from './components/shared/footer/footer.vue'
export default {
      components: {
    'meu-menu' : menu,
    'portfolio': portfolio,
    'home':home,
    'meu-footer':footer,
    'contato' :contato
    
  },
}
</script>

<style>
</style>
