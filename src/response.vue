<template>
    <label for="response">entrez votre réponse</label>
    <input type="text" id="input" name="response"/>
    <button @click="lock">lock</button>
</template>

<script setup>
    import { defineModel, defineEmits } from 'vue';

    const emit = defineEmits(['response']);

    const lock = () => 
    {
    let doc = document.getElementById("input");
     doc.disabled = true;
     //console.log(doc.value)
     
     emit('response', doc.value)
     
}
</script>

<style>

</style>