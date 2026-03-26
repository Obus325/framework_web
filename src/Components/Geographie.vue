<script setup>
import { computed, ref } from 'vue';
import APIFacts from '@/Axios/AxiosGeographie';

const flag = ref()
const pays = ref()
const latitude = ref()
const longitude = ref()
const info = ref()
const forme = ref()


const fetch = async () => {
try {
    console.log("start");
    const response = await APIFacts.get(`/api/geocode?lat=${latitude.value}&lng=${longitude.value}`);
    console.log(response)
    info.value = response.data
    console.log(info.value)
    pays.value = info.value.country.iso2
    flag.value = `https://borderly.dev/flag/wavy/${pays.value}.png`
}catch (error) {
    console.log('Error fetching list:', error);
    latitude.value = (Math.random()*160) - 80
    longitude.value = (Math.random()*360) - 180
    fetch()
}}



latitude.value = (Math.random()*180) - 90
longitude.value = (Math.random()*360) - 180
fetch();
</script>

<template>
    geographie
    <img :src="flag"></img>
    <img :src="forme"></img>

    <br>
    {{ latitude }} {{ longitude }}

</template>

<style scoped>

</style>