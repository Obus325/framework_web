<script setup>
import Facts from './Components/Facts.vue';
import { RouterLink, RouterView} from 'vue-router'
import { useRouter } from 'vue-router';

const router = useRouter()
const routes = router.getRoutes()
console.log(routes)
</script>

<template>
  <div v-for="route in routes">
    <RouterLink :to=route.path>{{route.path}}</RouterLink>
  </div>
  <RouterView />

</template>



