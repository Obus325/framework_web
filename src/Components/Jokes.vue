<script setup>
import { ref } from 'vue';
import APIFacts from '@/Axios/AxiosJokes';

    
    const joke = ref()
    const singlepart = ref()

    const fetchJokes = async () => {
    try {
        const response = await APIFacts.get(`/joke/Any`);
        joke.value = response.data;
        singlepart.value = joke.value.type == "single";

    }catch (error) {
        console.error('Error fetching list:', error);
    }}
    fetchJokes();
</script>

<template>
    <br>
    <div v-if="singlepart">
        {{joke.joke}}
    </div>
    <div v-else>
        {{ joke.setup }}
        <br>
        {{ joke.delivery }}
    </div>
</template>

<style scoped>

</style>