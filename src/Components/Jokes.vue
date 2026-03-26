<script setup>
import { ref } from 'vue';
import APIFacts from '@/Axios/AxiosJokes';

    
    const joke = ref()

    const fetchJokes = async () => {
    try {
        // console.log("start");
        const response = await APIFacts.get(`/joke/Any`);
        //console.log(response);
        joke.value = response.data;
        //console.log(fact.value);
    }catch (error) {
        console.error('Error fetching list:', error);
    }}


    // console.log("test")
    fetchJokes();
</script>

<template>
    joke
    {{ joke }}
</template>

<style scoped>

</style>