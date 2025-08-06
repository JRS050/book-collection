<script setup>
    import Form from '../components/Form.vue';
    import { authorStore } from '../store';
    import { useRouter } from 'vue-router';
    import {ref} from 'vue';

    const router = useRouter();

    const author = ref({
        name: '',
    });

    const addAuthor = async (data) => {
        await authorStore.actions.create(data);
    };

    const handleSubmit = async (data) => {
        await addAuthor(data);
        router.push({name: 'authors.overview'});
    };
</script>

<template>
    <div>
        <h2>Nieuw auteur toevoegen</h2>
        <Form :author="author" @submit="handleSubmit"/>
    </div>
</template>