<script setup>
import Facts from './Components/Facts.vue';
import { RouterLink, RouterView} from 'vue-router'
import { useRouter } from 'vue-router';
import { usePointsStore } from './store';


const router = useRouter()
const routes = router.getRoutes()
const store = usePointsStore();
const points = store.points

const add = () => {store.addpoints()}
console.log(routes)
</script>

<template>
  <div v-for="route in routes">
    <RouterLink :to=route.path>{{route.path}}</RouterLink>
  </div>
  <button @click="add"></button>
  {{ points }}
  <RouterView />

</template>



