import home from './src/components/home/home.vue'
import portfolio from './src/components/portfolio/portfolio.vue'
import contato from './src/components/contato/contato.vue'

export const routes = [
    { path: '', component: home},
    { path: '/portfolio', component: portfolio},
    { path: '/contato', component: contato}
];