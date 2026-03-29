<template>
    <label for="response">entrez votre réponse</label>
    <input type="text" name="response" v-model="model"/>
</template>

<script setup>
    import { defineModel } from 'vue';

    const model = defineModel();
</script>

<style>

</style>