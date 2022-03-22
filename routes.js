import Vue from 'vue'
import home from './src/components/home/home.vue'
import portfolio from './src/components/portfolio/portfolio.vue'

export const routes = [
    { path: '', component: home},
    { path: '/portfolio', component: portfolio}
];