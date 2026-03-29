<script setup>
import { computed, ref } from 'vue';
import APIFacts from '@/Axios/AxiosGeographie2';
import Response from '@/response.vue';

const flag = ref()
const pays = ref()

const reponse = ref("");

const fetch = async () => {
try {
    console.log("start");
    const response = await APIFacts.get(`/country-quiz`);
    console.log(response)
    flag.value = response.data.flag
    pays.value = response.data.answer
    
}catch (error) {
    console.log('Error fetching list:', error);
}}

fetch();
</script>

<template>
    geographie 2
    <img :src="flag">
    {{ pays }}

    <Response v-model="reponse"></Response>
</template>

<style scoped>

</style>