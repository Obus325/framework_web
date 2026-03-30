<script setup>
import { computed, ref, defineEmits } from 'vue';
import { usePointsStore } from '@/store';
import APIFacts from '@/Axios/AxiosGeographie';
import Response from '@/response.vue';


const flag = ref()
const pays = ref()

const reponse = ref("");
const correct = ref()


const store = usePointsStore();

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
    geographie 2
    <img :src="flag">
    <br>
    <div v-if="reponse!=''">
    votre réponse : {{ reponse }}
    <br>
    la bonne réponse : {{ pays }}
    </div>
    
    

    <Response @response="checkresponse"></Response>
</template>

<style scoped>

</style>