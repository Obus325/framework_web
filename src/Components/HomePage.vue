<script setup>
import { ref } from 'vue';

    
    const fact = ref()

    const fetchFacts = async () => {
    try {
        const response = await APIFacts.get(`/today`);
        console.log(response)
        fact.value = response.data.results
    }catch (error) {
        console.error('Error fetching list:', error);
    }

    onMounted(async () =>
    {
        await fetchFacts();
    })
}
</script>

<template>
    {{ fact.value }}
</template>

<style scoped>

</style>