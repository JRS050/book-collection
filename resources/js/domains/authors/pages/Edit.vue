<template>
    <div>
        <h2>Auteur bewerken</h2>
        <Form v-if="author" :author="author" @submit="handleSubmit" />
    </div>
</template>

<script setup>
    import { useRoute, useRouter } from 'vue-router';
    import Form from '../components/Form.vue';
    import { authorStore } from '../store';

    const route = useRoute();
    const router = useRouter();

     const author = authorStore.getters.getById(route.params.id);

    const updateAuthor = async (id,data) => {
        await authorStore.actions.update(id, data);
        // code... what code should I put here?
    };

    const handleSubmit = async (data) => {
        await updateAuthor(route.params.id, data);
        router.push({ name: 'authors.overview' });
    };
</script>