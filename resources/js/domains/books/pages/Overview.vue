<script setup>
    import { fetchBooks, getAllBooks, deleteBook } from '../store';

    fetchBooks();
</script>

<template>
    <table>
        <tr>
            <th>Title</th>
            <th>Summary</th>
        </tr>
        <tr v-for="book in getAllBooks" :key="book.id">
            <td>{{ book.title }}</td>
            <td>{{ book.summary }}</td>
            <td>
                <RouterLink :to="{ name: 'books.edit', params: { id: book.id } }">Bewerk</RouterLink>
                <button @click="deleteBook(book.id)">Verwijder</button>
            </td>
        </tr>
    </table>
</template>