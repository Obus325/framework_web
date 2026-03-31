<script setup>
import { RouterLink, RouterView} from 'vue-router'
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { usePointsStore } from './store';


const router = useRouter()
const routes = router.getRoutes().filter(route => !route.path.toLowerCase().includes(":") && !route.path.toLowerCase().includes("response"))
//permet de créer les liens de toutes les routes non exclues automatiquement

const store = usePointsStore();
const add = () => { store.addpoints();}
</script>

<template>
  <div v-for="route in routes">
    <RouterLink :to=route.path>{{route.path}}</RouterLink>
  </div>

  vos points : {{ store.points }}
  <br>
  <RouterView />

</template>



