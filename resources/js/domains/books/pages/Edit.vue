<template>
    <div>
        <h2>Boek bewerken</h2>
        <Form v-if="book" :book="book" @submit="handleSubmit" />
    </div>
</template>

<script setup>
    import { ref, onMounted, computed } from 'vue';
    import { useRoute, useRouter } from 'vue-router';
    import Form from '../components/Form.vue';
    import { bookStore } from '../store';

    const route = useRoute();
    const router = useRouter();

    const book = bookStore.getters.getById(route.params.id);

    const updateBook = async (id,data) => {
        await bookStore.actions.update(id, data);
        // code... what code should I put here?
    };

    const handleSubmit = async (data) => {
        await updateBook(route.params.id, data);
        router.push({ name: 'books.overview' });
    };
</script>