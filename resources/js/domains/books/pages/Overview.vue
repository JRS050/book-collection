<script setup>
    import { bookStore } from '../store';

    bookStore.actions.getAll();
    const books = bookStore.getters.all;
    const deleteBook = async (id) => {
        await bookStore.actions.delete(id);
        // works
    };
</script>

<template>
    <table>
        <tr>
            <th>Title</th>
            <th>Summary</th>
        </tr>
        <tr v-for="book in books" :key="book.id">
            <td>{{ book.title }}</td>
            <td>{{ book.summary }}</td>
            <td>
                <RouterLink :to="{ name: 'books.edit', params: { id: book.id } }">Bewerk</RouterLink>
                <button @click="deleteBook(book.id)">Verwijder</button>
            </td>
        </tr>
    </table>
</template>