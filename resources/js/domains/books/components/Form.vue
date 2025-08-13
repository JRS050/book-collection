<template>

    <errorMessage />

    <form @submit.prevent="handleSubmit">
        <label>Titel:</label>
        <input v-model="form.title" type="text"  />

        <FormError name="title" />

        <label>Samenvatting:</label>
        <textarea v-model="form.summary" ></textarea>

        <FormError name="summary" />

        <label>Auteur:</label>
        <select v-model="form.author_id" >
            <option v-for="author in authors" :key="author.id" :value="author.id">
                {{ author.name }}
            </option>
        </select>

        <FormError name="author" />

        <button type="submit">Opslaan</button>
    </form>
</template>

<script setup>
    import { ref } from 'vue';
    import { authorStore } from '../../authors/store';
    import  errorMessage from '../../../services/error/errorMessage.vue';
    import FormError from '../../../services/error/FormError.vue';

    authorStore.actions.getAll();
    const authors = authorStore.getters.all;

    const props = defineProps({ book: Object });

    const emit = defineEmits(['submit']);

    const form = ref({ ...props.book });

    const handleSubmit = () => emit('submit', form.value);
</script>