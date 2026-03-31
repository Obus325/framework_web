<script setup>
import { computed, ref, defineEmits } from 'vue';
import { usePointsStore } from '@/store';
import APIQuiz from '@/Axios/AxiosQuiz';
import Response from '@/Components/response.vue';


const question = ref()
const correct_answer = ref()

const reponse = ref("");
const correct = ref()


const store = usePointsStore();

const fetch = async () => {
try {
    console.log("start");
    const result = await APIQuiz.get(`/api.php?amount=1&type=multiple`);
    console.log(result)
    question.value = result.data.results[0].question
    correct_answer.value = result.data.results[0].correct_answer
    
    
}catch (error) {
    console.log('Error fetching list:', error);
}}

const checkresponse = (response) => {
    console.log(response)
    reponse.value = response
    if (response.toLowerCase() == correct_answer.toLowerCase())
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
    {{ question }}
    <br>
    <div v-if="reponse!=''">
    votre réponse : {{ reponse }}
    <br>
    la bonne réponse : {{ correct_answer }}
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