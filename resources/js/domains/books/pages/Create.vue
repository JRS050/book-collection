<script setup>
    import Form from '../components/Form.vue';
    import { bookStore } from '../store';
    import { useRouter } from 'vue-router';
    import {ref} from 'vue';

    const books = bookStore.getters.all;
    
    const addBook = async (data) => {
        await bookStore.actions.create(data);
        router.push({name: 'books.overview'});
    };

    const router = useRouter();

    const book = ref({
        title: '',
        summary: '',
        author_id: null
    });

    const handleSubmit = async (data) => {
        addBook(data); 
    };
</script>

<template>
    <div>
        <h2>Nieuw boek toevoegen</h2>
        <Form :book="book" @submit="handleSubmit"/>
    </div>
</template>