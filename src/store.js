import { defineStore } from 'pinia'
import { ref, computed } from 'vue'


export const usePointsStore = defineStore('points', () => {
  // State
  const points = ref(0)


  //Getter 
  


  // Setter
  const addpoints = () => 
  {
    points.value += 1 
  };


  const resetpoints = () => {
    points.value = ref(0)
  }

return {
    points,
    addpoints,
    resetpoints,
}
})
