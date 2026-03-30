<script setup>
import Facts from './Components/Facts.vue';
import { RouterLink, RouterView} from 'vue-router'
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { usePointsStore } from './store';


const router = useRouter()
const routes = router.getRoutes().filter(route => !route.path.toLowerCase().includes(":"))
const store = usePointsStore();
const add = () => { store.addpoints();}
console.log(routes)
</script>

<template>
    <div v-for="route in routes">
    <RouterLink :to=route.path>{{route.path}}</RouterLink>
  </div>
  {{ store.points }}
  <RouterView />

</template>



