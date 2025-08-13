<script setup lang="ts">
    import { ref } from 'vue';
    import { reviewStore } from '../store';
    import  errorMessage from '../../../services/error/errorMessage.vue';
    import FormError from '../../../services/error/FormError.vue';


    reviewStore.actions.getAll();
    const reviews = reviewStore.getters.all;

    const props = defineProps({ review: Object });

    const emit = defineEmits(['submit']);

    const form = ref({ ...props.review });

    const handleSubmit = () => emit('submit', form.value);
</script>
<template>


    <errorMessage />

    <form @submit.prevent="handleSubmit">

        <FormError name="content" />

        <textarea v-model="form.content" ></textarea>
    </form>
</template>