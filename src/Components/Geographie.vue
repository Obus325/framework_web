<script setup>
import { computed, ref, defineEmits } from 'vue';
import { usePointsStore } from '@/store';
import APIGeo from '@/Axios/AxiosGeographie';
import Response from '@/Components/response.vue';


const flag = ref()
const pays = ref()

const reponse = ref("");
const correct = ref()


const store = usePointsStore();

const fetch = async () => {
try {
    console.log("start");
    const response = await APIGeo.get(`/country-quiz`);
    console.log(response)
    flag.value = response.data.flag
    pays.value = response.data.answer
    
}catch (error) {
    console.log('Error fetching list:', error);
}}

const checkresponse = (response) => {
    console.log(response)
    reponse.value = response
    if (response.toLowerCase() == pays.value.toLowerCase())
    {
        correct.value = true
        store.addpoints()
    }
    else 
    {
        correct.value = false
    }
}

fetch();
</script>

<template>
    <br>
    <img :src="flag">
    <br>
    <div v-if="reponse!=''" :class="correct">
    votre réponse : {{ reponse }}
    <br>
    la bonne réponse : {{ pays }}
    </div>
    
    

    <Response @response="checkresponse"></Response>
</template>

<style scoped>

.true
{
    background-color: green;
}

.false
{
    background-color: red;
}
</style>