<template>

    <errorMessage />

    <form @submit.prevent="handleSubmit">
        <label>Naam:</label>
        <input v-model="form.name" type="text" required />

        <FormError name="name" />

        <button type="submit">Opslaan</button>
    </form>
</template>

<script setup>
    import { ref } from 'vue';
    import  errorMessage from '../../../services/error/errorMessage.vue';
    import FormError from '../../../services/error/FormError.vue';

    const props = defineProps({ author: Object });

    const emit = defineEmits(['submit']);

    const form = ref({ ...props.author });

    const handleSubmit = () => emit('submit', form.value);
</script>