import home from './src/components/home/home.vue'
import portfolio from './src/components/portfolio/portfolio.vue'
import contato from './src/components/contato/contato.vue'
import bookmark from './src/components/portfolio/portfolio-pages/bookmark/bookmark.vue'
import fylo from './src/components/portfolio/portfolio-pages/fylo/fylo.vue'
import insure from './src/components/portfolio/portfolio-pages/insure/insure.vue'
import manager from './src/components/portfolio/portfolio-pages/manager/manager.vue'

export const routes = [
    { path: '', component: home},
    { path: '/portfolio', component: portfolio},
    { path: '/contato', component: contato},
    {path: '/bookmark', component: bookmark},
    {path: '/fylo', component: fylo},
    {path: '/insure', component: insure},
    {path: '/manager', component: manager}
];