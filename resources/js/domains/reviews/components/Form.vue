<script setup lang="ts">
    import { ref } from 'vue';
    import  errorMessage from '../../../services/error/errorMessage.vue';
    import FormError from '../../../services/error/FormError.vue';


    

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

        <button type="submit">Post review</button>
    </form>
</template>