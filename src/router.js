import { createRouter, createWebHistory } from "vue-router"
import { routes } from 'vue-router/auto-routes'

const router = createRouter({
    // createWebHistory() = mode "history" (URLs propres sans #)
    history: createWebHistory(),
  
    // Les routes sont générées automatiquement par unplugin-vue-router
    // basé sur la structure des fichiers dans src/pages/
    // Exemple :
    //   src/pages/index.vue       → route "/"
    //   src/pages/about.vue       → route "/about"
    //   src/pages/users/[id].vue  → route "/users/:id" (param dynamique)
    routes,
  })
  
  export default router