<script setup>
    import { authorStore } from '../store';
    import { getErrorBag } from '../../../services/error';
    import errorMessage from '../../../services/error/errorMessage.vue';

    authorStore.actions.getAll();
    const authors = authorStore.getters.all;
    const deleteAuthor = async (id) => {
        await authorStore.actions.delete(id);
        // works
    };
</script>

<template>

    <errorMessage />

    <table>
        <tr>
            <th>Name</th>
        </tr>
        <tr v-for="author in authors" :key="author.id">
            <td>{{ author.name }}</td>
            <td>
                <RouterLink :to="{ name: 'authors.edit', params: { id: author.id } }">Bewerk</RouterLink>
                <button @click="deleteAuthor(author.id)">Verwijder</button>
            </td>
        </tr>
    </table>
</template>