<script setup>
import { ref } from 'vue';
import APIFacts from '@/Axios/AxiosFacts';

    
    const fact = ref()

    const fetchFacts = async () => {
    try {
        // console.log("start");
        const response = await APIFacts.get(`/today`);
        //console.log(response);
        fact.value = response.data.text;
        //console.log(fact.value);
    }catch (error) {
        console.error('Error fetching list:', error);
    }}


    // console.log("test")
    fetchFacts();
</script>

<template>
    fait insolite <br>

    {{ fact }}
</template>

<style scoped>

</style>