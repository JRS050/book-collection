<template>
    <div>
        <h2>Review bewerken</h2>
        <Form v-if="review" :review="review" @submit="handleSubmit" />
    </div>
</template>

<script setup>
    import { useRoute, useRouter } from 'vue-router';
    import Form from '../components/Form.vue';
    import { reviewStore } from '../store';

    const route = useRoute();
    const router = useRouter();

    const review = reviewStore.getters.getById(route.params.id);

    const updateReview = async (id,data) => {
        await reviewStore.actions.update(id, data);
        // code... what code should I put here?
    };

    const handleSubmit = async (data) => {
        await updateReview(route.params.id, data);
        router.go(-1);
    };
</script>